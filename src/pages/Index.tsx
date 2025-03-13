
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Hero from '@/components/Home/Hero';
import PopularRoutes from '@/components/Home/PopularRoutes';
import Features from '@/components/Home/Features';
import AppPromotion from '@/components/Home/AppPromotion';
import TrainCategories from '@/components/Home/TrainCategories';
import Footer from '@/components/Layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PopularRoutes />
        <TrainCategories />
        <Features />
        <AppPromotion />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
