import React from 'react';

import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppFeature from '../components/home/feature';
import AppWorks from '../components/home/works';
import AppPricing from '../components/home/pricing';
import AppContact from '../components/home/contact';

function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppFeature/>
      <AppPricing/>
      <AppWorks/> 
            <AppContact/>
    </div>
  );
}

export default AppHome;