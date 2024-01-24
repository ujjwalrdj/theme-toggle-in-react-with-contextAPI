import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme-context.js';
export default function Navbar() {
  const themeCtx = useTheme();
  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="mode-switch">
          <label class="theme-switch" for="checkbox" id="themeswitch">
            <input
              type="checkbox"
              id="checkbox"
              onChange={themeCtx.toggleThemeHandler}
              checked={themeCtx.theme === 'dark'}
            />
            <div class="slider round"></div>
            <span class="name"></span>
            <div class="back"></div>
          </label>
        </div>
      </nav>
    </>
  );
}
