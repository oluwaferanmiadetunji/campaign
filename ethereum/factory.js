import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),'0xe22e0dA5B898a065656E2c0eaf6a33803b47f633')

export default instance