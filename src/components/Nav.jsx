import React from 'react';
import { Link, useParams } from 'react-router-dom';
import s from './Nav.module.css';
import SearchBar from './SearchBar.jsx';

function Nav({onSearch}) {
  return (
    <div className={s.nav}>
      <Link to='/'>
        <span className={s.logo}></span>
        <h2 className={s.title}>Weather App</h2>
      </Link >
      <Link to='/about'>
        <p>About</p>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
