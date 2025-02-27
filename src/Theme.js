import { useEffect, useState } from 'react';
import ThemeCSS from './Theme.module.css';


const THEME_ATTR='color-theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
const LightIcon = () => {
  return (
    <svg className={ThemeCSS.light} xmlns="http://www.w3.org/2000/svg" version="1.0" width="300.000000pt" height="300.000000pt" viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,300.000000) scale(0.050000,-0.050000)" fill="#ffffff" stroke="none">
        <path d="M2903 5054 c-64 -69 -67 -746 -3 -804 52 -47 148 -47 200 0 66 60 61 743 -6 807 -60 56 -136 55 -191 -3z"/>
        <path d="M1520 4480 c-90 -90 -61 -147 206 -414 265 -266 338 -301 421 -209 83 91 51 154 -213 417 -267 267 -324 296 -414 206z"/>
        <path d="M4066 4274 c-266 -265 -301 -338 -209 -421 91 -83 154 -51 417 213 267 267 296 324 206 414 -90 90 -147 61 -414 -206z"/>
        <path d="M2820 3997 c-295 -48 -598 -281 -730 -560 -481 -1021 825 -1946 1622 -1149 696 697 84 1869 -892 1709z"/>
        <path d="M943 3094 c-56 -60 -55 -136 3 -191 44 -41 64 -43 407 -43 402 0 434 10 434 140 0 130 -32 140 -437 140 -354 0 -364 -1 -407 -46z"/>
        <path d="M4250 3100 c-20 -22 -37 -67 -37 -100 0 -130 32 -140 437 -140 354 0 364 1 407 46 56 60 55 136 -3 191 -69 64 -746 67 -804 3z"/>
        <path d="M1726 1934 c-267 -267 -296 -324 -206 -414 90 -90 147 -61 414 206 266 265 301 338 209 421 -91 83 -154 51 -417 -213z"/>
        <path d="M3853 2143 c-83 -91 -51 -154 213 -417 267 -267 324 -296 414 -206 90 90 61 147 -206 414 -265 266 -338 301 -421 209z"/>
        <path d="M2960 1786 c-96 -35 -100 -52 -100 -436 0 -400 16 -450 143 -450 120 0 137 56 137 453 0 404 -34 485 -180 433z"/>
      </g>
    </svg> 
  );
}
const DarkIcon = () => {
  return (
    <svg className={ThemeCSS.dark} xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
      <g xmlns="http://www.w3.org/2000/svg" transform="translate(0.000000,512.000000) scale(0.050000,-0.050000)" fill="#000000" stroke="none">
        <path d="M3286 9457 c-278 -49 -885 -404 -1252 -732 -1220 -1089 -1609 -2938 -937 -4445 1363 -3054 5708 -3038 7061 26 216 490 -24 769 -527 614 -626 -192 -1334 -189 -1941 10 -1622 531 -2515 2230 -2038 3874 136 468 -4 718 -366 653z"/>
      </g>
    </svg>
  );
}

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem(THEME_ATTR) || LIGHT_THEME);
  
  const changeTheme = (value) => {
    setTheme(value);
  }

  useEffect(() => {
    document.documentElement.setAttribute(THEME_ATTR, theme);
    localStorage.setItem(THEME_ATTR, theme);
  }
  , [theme]);

  return (
    <>
      <div className='themeSelector'>
        <button
          onClick={() => {
            if (theme === LIGHT_THEME) {
              changeTheme(DARK_THEME);
            } else {
              changeTheme(LIGHT_THEME);
            }
          }}
          className={ThemeCSS.SelectorBtn}
        >
          {theme === LIGHT_THEME ? <DarkIcon /> : <LightIcon />}
        </button>
      </div>
    </>
  );
}

export default Theme;