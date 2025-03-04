import React from 'react';
import Navigation from '../components/layouts/Navigation/Navigation';
import Footer from '../components/layouts/Footer/Footer';
import MainCat from '../components/modules/cat-img/CatImg';

const App = () => {
  return (
    <>
      <Navigation />
      <div className="App">
        <MainCat />
      </div>
      <Footer />
    </>
  );
};

export default App;
