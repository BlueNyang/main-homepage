import headercss from "./Header.module.css";
import Theme from "./Theme";


const Header = () => {
  return (
    <header>
      <div className={headercss.menu}>
        <ul>
          <li><Theme /></li>
        </ul>
      </div>
      <h1 className={headercss.logo}>
        <a href="/">BlueNyang</a>
      </h1>
    </header>
  );
}

export default Header;