import React from 'react';
import Card from './Card';
import s from './Cards.module.css'

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if (cities) {
  return <div className={s.container}>
      {cities.map((c) => {return <Card 
        name = {c.name} 
        max={c.max}
        min={c.min}
        img={c.img}
        onClose={() => onClose(c.id)} 
        id={c.id}
        />})}
    </div>
  } else {
    return <div>Sin ciudades</div>
  }
};