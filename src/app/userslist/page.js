"use client"
import { useEffect, useState } from "react"
import './user.css'
import Link from "next/link"
export default function UserList() {
    const [users, setUsers] = useState([])
    useEffect(async () => {

        let data = await fetch("https://dummyjson.com/users");
        data = await data.json();
        setUsers(data.users)
        console.warn(data.users);
    }, [])
    return (
        <div>
            <h1>Users {users.length}</h1>
        {
            users.map((item)=>(<ul>
                    <li>{item.firstName}</li>
                    <li>{item.lastName}</li>
                    <Link href={"/"+item.id} >{item.firstName}</Link>

                </ul> 
            ))
        }
        </div>
    )
}