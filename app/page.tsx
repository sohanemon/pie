import About from './about';
import Claim from './claim';
import Header from './header';
import HowTo from './how-to';
import Map from './map';
import Pledge from './pledge';
import TokenModel from './token-model';

export default async function IndexPage() {
  return (
    <main className=" ">
      <Header />
      <About />
      <HowTo />
      <Claim />
      <Pledge />
      <TokenModel />
      <Map />
    </main>
  );
}
