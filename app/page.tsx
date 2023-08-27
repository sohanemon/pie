import About from './about';
import Claim from './claim';
import Header from './header';
import HowTo from './how-to';

export default async function IndexPage() {
  return (
    <main className=" ">
      <Header />
      <About />
      <HowTo />
      <Claim />
    </main>
  );
}
