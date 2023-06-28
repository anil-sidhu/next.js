
import Image from "next/image"
import { Inter } from 'next/font/google'
import Profile from '../../public/vercel.svg'
export default function Home() {
  console.log(Profile)
  return (
    <main>
      <h1>Image Optimization in Next</h1>
      {/* <Image
        src={Profile}
      />
      <img 
      src={Profile.src}
      /> */}
      <Image 
      src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
     width={1800}
     height={1800}
     />

    </main>
  )
}


