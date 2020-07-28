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
	render() {
		return (
			<Layout>
				<h3>Create a Request</h3>
				<Form>
					<Form.Field>
						<label>Description</label>
						<Input />
					</Form.Field>
					<Form.Field>
						<label>Value in Ether</label> <Input />
					</Form.Field>
					<Form.Field>
						<label>Recipient</label> <Input />
					</Form.Field>
				</Form>
			</Layout>
		);
	}
}

export default RequestNew;
