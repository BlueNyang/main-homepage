import { React, useEffect, useState } from 'react';
import { BsBrightnessHighFill, BsFillMoonFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const THEME_ATTR = 'data-bs-theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

const Theme = ({ className, iconSize }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem(THEME_ATTR) || LIGHT_THEME,
  );

  const changeTheme = (value) => {
    setTheme(value);
  };

  useEffect(() => {
    document.documentElement.setAttribute(THEME_ATTR, theme);
    localStorage.setItem(THEME_ATTR, theme);
  }, [theme]);

  return (
    <div className={`${className}`}>
      <button
        type='button'
        onClick={() => {
          if (theme === LIGHT_THEME) {
            changeTheme(DARK_THEME);
          } else {
            changeTheme(LIGHT_THEME);
          }
        }}
        className='border border-0 bg-transparent'
      >
        {theme === LIGHT_THEME ? (
          <BsFillMoonFill size={`${iconSize}`} />
        ) : (
          <BsBrightnessHighFill size={`${iconSize}`} />
        )}
      </button>
    </div>
  );
};

Theme.defaultProps = {
  className: '',
  iconSize: '1rem',
};

Theme.propTypes = {
  className: PropTypes.string,
  iconSize: PropTypes.string,
};

export default Theme;
