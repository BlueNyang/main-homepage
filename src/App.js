import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import MainCat from "./CatImg";

function App() {
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
}

export default App;
