import React, { useState } from 'react';
import s from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [city, setCity] = useState("")
  const handleCity = (e) => {
    e.preventDefault();
    setCity(e.target.value)
  }

  return <form className={s.search} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("")
    }}>
      <input className={s.searchTerm}
        type="text"
        placeholder="Ciudad..."
        onChange={(e) => handleCity(e)}
        value={city}
      />
      <input className={s.searchButton} type="submit" value="Agregar" />
    </form>
};

