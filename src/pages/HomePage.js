import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import FeaturedProjects from '../components/sections/FeaturedProjects';

function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProjects />
    </main>
  );
}

export default HomePage;