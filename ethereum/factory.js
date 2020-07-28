import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), '0x9484981ea3102E76c5B59E30bDCb4CD93cEfBe29');

export default instance;
