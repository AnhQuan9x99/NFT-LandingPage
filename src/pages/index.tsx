import About from '../containers/Home/About';
import Contact from '../containers/Home/Contact';
import Counter from '../containers/Home/Counter';
import Faq from '../containers/Home/FAQ';
import AppFeature from '../containers/Home/AppFeature';
import Feedback from '../containers/Home/Feedback';
import MakeNFT from '../containers/Home/MakeNFT';
import HowToMakeNFT from '../containers/Home/HowToMakeNFT';
import Intro from '../containers/Home/intro';
import AppScreens from '../containers/Home/AppScreens';
import Collection from '../containers/Home/Collection';
import type { NextPage } from 'next';

const Home: NextPage = () => {

  return (
    <div>
      <Intro />
      <About />
      <Counter />
      <AppFeature />
      <HowToMakeNFT />
      <AppScreens />
      <MakeNFT />
      <Feedback />
      <Collection />
      <Faq />
      <Contact />

    </div>
  );
};

export default Home;
