"use client"
import { useState } from 'react'
import style from './style.module.css'
export default function Home() {
  const [color,setColor]=useState("red");
  const {red} = style
  return (
    <main>
      <h1 className={color=='red'?style.red:style.green} >Condtion with Style </h1>
      <h2 style={{backgroundColor:color=='red'?'red':'green'}} >Heading 2</h2>
      <h3 id={style.orange} >Heading 3</h3>

      <h4  className={red}>Dummy text</h4>
      <h4 className={red}>Dummy text</h4>
      <h4 className={red}>Dummy text</h4>
      <h4 className={red}>Dummy text</h4>


      <button onClick={()=>setColor("green")} >Update Color</button>
    </main>
  )
}


