import React from "react";
import s from './About.module.css'

export default function About(){

    return (
        <>
        <p className={s.text}>Web App developed by Matias Palomo <br/>
        </p>
        <p className={s.text}>Social Networks:
        <a className={s.a} href="https://www.instagram.com/matias.palomo96/" target="_blank">Instagram</a>
        </p>
        </>
    )
}