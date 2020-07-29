import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component {
	state = {
		loading: false,
	};
	onApprove = async (event) => {
		event.preventDefault();
		this.setState({ loading: true });
		const campaign = Campaign(this.props.address);
		try {
			await window.ethereum.enable();
			const accounts = await web3.eth.getAccounts();
			await campaign.methods.approveRequest(this.props.id).send({ from: accounts[0] });
			this.setState({ loading: false });
		} catch (err) {
			this.setState({ loading: false });
		}
	};
	onFinalize = async (event) => {
		event.preventDefault();
		this.setState({ loading: true });
		const campaign = Campaign(this.props.address);
		try {
			await window.ethereum.enable();
			const accounts = await web3.eth.getAccounts();
			await campaign.methods.finalizeRequest(this.props.id).send({ from: accounts[0] });
			this.setState({ loading: false });
		} catch (err) {
			this.setState({ loading: false });
		}
	};
	render() {
		const { Row, Cell } = Table;
		const {
			id,
			request: { description, amount, recipient, approvalCount, complete },
			approversCount,
		} = this.props;
		const ready = approvalCount > approversCount / 2;
		return (
			<Row disabled={complete} positive={ready && !complete}>
				<Cell>{id + 1}</Cell>
				<Cell>{description}</Cell>
				<Cell>{web3.utils.fromWei(amount, 'ether')} </Cell>
				<Cell>{recipient}</Cell>
				<Cell>
					{approvalCount}/{approversCount}
				</Cell>
				<Cell>
					{complete ? null : (
						<Button color='green' basic onClick={this.onApprove} loading={this.state.loading}>
							Approve
						</Button>
					)}
				</Cell>
				<Cell>
					{complete ? null : (
						<Button color='teal' basic onClick={this.onFinalize} loading={this.state.loading}>
							Finalize
						</Button>
					)}
				</Cell>
			</Row>
		);
	}
}
export default RequestRow;
