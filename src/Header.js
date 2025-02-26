import headercss from "./Header.module.css";


const Header = () => {
  return (
    <header>
      <h1 className={headercss.logo}>BlueNyang</h1>
    </header>
  );
}

export default Header;