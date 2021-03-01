import Hero from './components/Hero';
import NavBar from './components/NavBar';
import HeroBg from './assets/images/HeroBg.svg';
import DashboardBanner from './components/DashboardBanner';
import Categories from './components/Categoreis';
import WhyTutor from './components/WhyTutor';

import './App.css';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero backgroundImg={HeroBg} />
      <DashboardBanner />
      <Categories />
      <WhyTutor />
    </div>
  );
}

export default App;
