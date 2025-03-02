import React from 'react';
import Header from '../components/layouts/Header/Header';
import Navigation from '../components/layouts/Navigation/Navigation';
import Footer from '../components/layouts/Footer/Footer';
import MainCat from '../components/modules/cat-img/CatImg';

const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div className="App bg-dark">
        <MainCat />
      </div>
      <Footer />
    </>
  );
};

export default App;
