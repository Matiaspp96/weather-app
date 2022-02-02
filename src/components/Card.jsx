import React from 'react';
import s from './Card.module.css'
import { Link } from 'react-router-dom';


export default function Card({min, max, name, img, onClose, id}) {
  // acá va tu código
/*   function kevinCelcius(grados){
    return parseInt(grados - 273);
  }
 */
  return <div className={s.container}>
      <button type='button' className={s.btn} onClick={onClose}>X</button>
      <Link to={`/ciudad/${id}`}>
        <h2 className={s.name}>{name}</h2>
      </Link>
      <div className={s.temp}>
        <h4>Min</h4>
        <p>{min}º</p>
        <h4>Max</h4>
        <p>{max}º</p>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} className={s.img} alt="Icono"/>  
      </div>
  </div>
};