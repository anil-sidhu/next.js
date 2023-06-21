"use client"
import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name)
  }
  return (
    <main>
      <h1>Dynamic Routing</h1>
      <Link href="/studentlist" >Go to Login Page</Link>
    

    </main>
  )
}


