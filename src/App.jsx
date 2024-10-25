import React from 'react';
import PromoSection from './assets/components/Promosection';
import Navbar from './assets/components/Navbar';
import SocialMediaPromo from './assets/components/SocialMediaPromo';
import KeyFeatures from './assets/components/KeyFeatures';
import ChallengesSection from './assets/components/ChallengesSection';
import Solution from './assets/components/Solution';
import WhyChooseUs from './assets/components/WhyChooseUs';
import HowItWorks from './assets/components/HowItWorks';
import Pricing from './assets/components/Pricing';
import GetStartedToday from './assets/components/GetStartedToday';
import Footer from './assets/components/Footer';
import CoolSection from './assets/components/Cool';



const App = () => {
  return (
    <>
      <Navbar />
      <PromoSection />
      <SocialMediaPromo />
      <KeyFeatures />
      <ChallengesSection />
      <Solution />
      <WhyChooseUs />
      <HowItWorks />
      <Pricing />
      <GetStartedToday />
      <CoolSection/>
      <Footer />
    </>
  );
};

export default App;