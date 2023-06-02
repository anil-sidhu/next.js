'use client'
import { useState } from 'react'
import styles from './page.module.css'


export default function Home() {
  const [name, setName] = useState("Anil")

  const apple = () => {

    setName("Sidhu")
  }

  const InnerComp = () => {
    return (
      <h1>Inner Component</h1>
    )
  }
  return (
    <main className={styles.main}>
      <h1>Events , function and state {name} </h1>
      <button onClick={() => apple()}>Click Me</button>
      {/* <InnerComp /> */}
      {InnerComp()}
    </main>
  )
}


