import Hero from './components/Hero';
import NavBar from './components/NavBar';
import HeroBg from './assets/images/HeroBg.svg';
import DashboardBanner from './components/DashboardBanner';
import Categories from './components/Categoreis';
import WhyTutor from './components/WhyTutor';
import Banner from './components/Banner';

import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero backgroundImg={HeroBg} />
      <DashboardBanner />
      <Categories />
      <WhyTutor />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
