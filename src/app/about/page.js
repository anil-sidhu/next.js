"use client"
import {useRouter} from 'next/navigation'
const About=()=>{
    const router = useRouter();
    return(
        <div>
            <h1>About Page</h1>
            <button onClick={()=>router.push("/")} >Go to Home Page</button>
        </div>
    )
}

export default About;