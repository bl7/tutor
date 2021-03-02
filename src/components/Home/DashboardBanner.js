import Image4 from '../../assets/images/image4.jpg';
import Image5 from '../../assets/images/image5.jpg';
import Image6 from '../../assets/images/image6.jpg';
import Image7 from '../../assets/images/image7.jpg';
import Image8 from '../../assets/images/image8.jpg';
import Image9 from '../../assets/images/image9.jpg';
import './DashboardBanner.css';
const DashboardBanner = () => {
  return (
    <div className="dashboardBanner">
      <div className="dashboardBanner__text col-black mt-5">
        <p>We collaborate with 200+ leading universities and companies</p>
      </div>
      <div className="dashboardBanner__images">
        <img src={Image4} alt="" className="dashboardBanner__image" />
        <img src={Image5} alt="" className="dashboardBanner__image" />
        <img src={Image6} alt="" className="dashboardBanner__image" />
        <img src={Image7} alt="" className="dashboardBanner__image" />
        <img src={Image8} alt="" className="dashboardBanner__image" />
        <img src={Image9} alt="" className="dashboardBanner__image" />
      </div>
    </div>
  );
};

export default DashboardBanner;
