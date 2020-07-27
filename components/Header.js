import React from 'react';
import { Menu } from 'semantic-ui-react';

export default () => {
	return (
		<Menu style={{ marginTop: 20 }}>
			<Menu.Item>Crowd Coin</Menu.Item>
			<Menu.Menu position='right'>
				<Menu.Item>Campaigns</Menu.Item>
				<Menu.Item>+</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
};
