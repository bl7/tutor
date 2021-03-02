import React from 'react';
import Hero from '../components/Home/Hero';
import NavBar from '../components/Home/NavBar';
import HeroBg from '../assets/images/HeroBg.svg';
import DashboardBanner from '../components/Home/DashboardBanner';
import Categories from '../components/Home/Categoreis';
import WhyTutor from '../components/Home/WhyTutor';
import Banner from '../components/Home/Banner';
import Footer from '../components/Home/Footer';
import StartTeaching from '../components/Home/StartTeaching';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero backgroundImg={HeroBg} />
      <DashboardBanner />
      <Categories />
      <WhyTutor />
      <Banner />
      <StartTeaching />
      <Footer />
    </div>
  );
};

export default Home;
