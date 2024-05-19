

import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import BrowserSupportSection from './components/BrowserSupportSection';
import Footer from './components/Footer';
import ReviewSection from './components/ReviewSection';
import Visitors from './components/Visitors';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <HeroSection />
      <ReviewSection/>
      <Visitors/>
      <PricingSection />
      <BrowserSupportSection />
      <FeaturesSection />
      <Footer />
    </>
  );
};

export default App;
