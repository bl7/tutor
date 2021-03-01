import React from 'react';
import CatCard from './CatCard';
import cat1 from '../assets/images/categoriesFirst.jpg';
import cat2 from '../assets/images/categoriesSecond.jpg';
import cat3 from '../assets/images/categoriesThird.jpg';
import cat4 from '../assets/images/categoriesFourth.jpg';
import cat5 from '../assets/images/categoriesFifth.jpg';
import './Categories.css';

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__contain">
        <div className="categories__heading">
          <h3>Top Categories</h3>
        </div>
        <div className="categories__cards">
          <CatCard text="Online Classes" image={cat1} />
          <CatCard text="Tuition" image={cat2} />
          <CatCard text="Courses" image={cat3} />
          <CatCard text="Music" image={cat4} />
          <CatCard text="Explore 100+ Categories" image={cat5} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
