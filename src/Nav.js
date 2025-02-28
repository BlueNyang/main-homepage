import './Nav.module.css';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href=".">Home</a>
        </li>
        <li>
          <a href=".">Menu</a>
        </li>
        <li>
          <a
            href="https://github.com/BlueNyang"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a href=".">Team CROFFLE</a>
        </li>
        <li>
          <a href=".">File Sharing</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
