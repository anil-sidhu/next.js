"use client"
import { API_BASE_URL } from "@/config/constants"

export default function Home() {

  console.log(process.env.NODE_ENV)
  return (
    <main>
      {
        process.env.NODE_ENV=="development"?
        <h1>You are on development Mode</h1>
        :
        <h1>You are on Production Mode</h1>
      }
      <h1>Environment Variables in Next js </h1>

    <h1> {API_BASE_URL}</h1>
    </main>
  )
}


