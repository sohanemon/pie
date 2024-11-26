import About from './about';
import Claim from './claim';
import Header from './header';
import HowTo from './how-to';
import Map from './map';
import Miner from './miner';
import Model from './model';
import Pledge from './pledge';
import TokenModel from './token-model';

export default async function IndexPage() {
  return (
    <>
      <Header id="首页" />
      <About id="项目介绍" />
      <HowTo id="如何购买" />
      <Claim id="领取空投" />
      <Pledge id="质押挖矿" />
      <TokenModel id="代币模型" />
      <Miner id='挖矿'/>
      <Model id='代币模型'/>
      <Map id="路线图" />
    </>
  );
}
