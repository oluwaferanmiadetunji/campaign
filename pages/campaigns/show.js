import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes'

class CampaignShow extends Component {
	static async getInitialProps(props) {
		const campaign = Campaign(props.query.address);
		const summary = await campaign.methods.getSummary().call();
		return {
			address: props.query.address,
			minimumContribution: summary[0],
			balance: summary[1],
			requestsCount: summary[2],
			approversCount: summary[3],
			manager: summary[4],
		};
	}

	renderCards = () => {
		const { balance, minimumContribution, requestsCount, approversCount, manager } = this.props;
		const items = [
			{
				header: manager,
				meta: 'Address of Manager',
				description: 'The Manager created this campaign and can make requests to withdraw money',
				style: { overflowWrap: 'break-word' },
			},
			{
				header: minimumContribution,
				meta: 'Minimum Contribution (wei)',
				description: 'That is the minimum amount of wei you can contribute',
				style: { overflowWrap: 'break-word' },
			},
			{
				header: requestsCount,
				meta: 'Number of requests',
				description: 'A request tries to withdraw money from the contract. Request must be approved by Approvers',
				style: { overflowWrap: 'break-word' },
			},
			{
				header: approversCount,
				meta: 'Number of Approvers',
				description: 'Number of people who have already donated to the campaign',
				style: { overflowWrap: 'break-word' },
			},
			{
				header: web3.utils.fromWei(balance, 'ether'),
				meta: 'Campaign balance (ether)',
				description: 'Amount of money left in the campaign',
				style: { overflowWrap: 'break-word' },
			},
		];

		return <Card.Group items={items} />;
	};
	render() {
		return (
			<Layout>
				<h3>Campaign Show</h3>
				<Grid>
					<Grid.Column width={10}>{this.renderCards()}</Grid.Column>
					<Grid.Column width={6}>
						<ContributeForm address={this.props.address} />
					</Grid.Column>
				</Grid>
			</Layout>
		);
	}
}

export default CampaignShow;
