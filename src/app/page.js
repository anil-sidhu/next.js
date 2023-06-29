import { Roboto } from "next/font/google"
const roboto= Roboto({
  weight:'100',
  subsets:['latin'],
  display:'swap'
})
export default function Home() {

  return (
    <main>
      <h1>Font Optimization in Next</h1>
      {/* <h1 style={{fontFamily:'Roboto', fontWeight:100}} >Font with Link Tag in Next</h1> */}
    <h1 className={roboto.className}>Font with Next js font feature</h1>
    </main>
  )
}


