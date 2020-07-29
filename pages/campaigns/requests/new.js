import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';

class RequestNew extends Component {
	state = {
		value: '',
		errorMessage: '',
		loading: false,
		description: '',
		recipient: '',
	};
	static async getInitialProps(props) {
		const { address } = props.query;
		return { address };
	}

	onSubmit = async (event) => {
		event.preventDefault();
		this.setState({ loading: true, errorMessage: '' });
		const campaign = Campaign(this.props.address);
		const { description, value, recipient } = this.state;
		try {
			await window.ethereum.enable();
			const accounts = await web3.eth.getAccounts();
			await campaign.methods
				.createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
				.send({ from: accounts[0] });
			this.setState({ loading: false });
			Router.replaceRoute(`/campaigns/${this.props.address}`);
		} catch (err) {
			this.setState({ errorMessage: err.message });
			this.setState({ loading: false });
		}
	};
	render() {
		return (
			<Layout>
				<h3>Create a Request</h3>
				<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
					<Form.Field>
						<label>Description</label>
						<Input
							label='ether'
							labelPosition='right'
							value={this.state.description}
							onChange={(event) => this.setState({ description: event.target.value })}
						/>
					</Form.Field>
					<Form.Field>
						<label>Value in Ether</label>
						<Input value={this.state.value} onChange={(event) => this.setState({ value: event.target.value })} />
					</Form.Field>
					<Form.Field>
						<label>Recipient</label>
						<Input
							value={this.state.recipient}
							onChange={(event) => this.setState({ recipient: event.target.value })}
						/>
					</Form.Field>
					<Message error header='Oops!' content={this.state.errorMessage} />
					<Button primary loading={this.state.loading}>
						Contribute
					</Button>
				</Form>
			</Layout>
		);
	}
}

export default RequestNew;
