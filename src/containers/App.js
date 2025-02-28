import React from 'react';
import Header from '../components/layouts/Header/Header';
import Nav from '../components/layouts/Navigation/Nav';
import Footer from '../components/layouts/Footer/Footer';
import MainCat from '../components/modules/cat-img/CatImg';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <div className="App">
        <MainCat />
      </div>
      <Footer />
    </>
  );
};

export default App;
