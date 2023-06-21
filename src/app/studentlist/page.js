// 'use client'
// import List from "../../../lib/List";
import Link from 'next/link'


async function List() {
    let data = await fetch("https://dummyjson.com/products");
    return await data.json();

}

export default async function StudentList() {
    let usersData = await List();

    console.warn("11------apple", usersData.products);

    return (
        <div>
            <h1>Student List {usersData.length}</h1>
            {
                usersData.products.length ?
                    usersData.products.map((item) => (<h1>{item.title}</h1>))
                    : null
            }
            {/* <ul>
                <li> 
                    <Link href="/studentlist/anil" >Anil</Link>
                </li>
                <li> 
                <Link href="/studentlist/sam" >Sam</Link>
                </li>
                <li> 
                <Link href="/studentlist/peter" >Peter</Link>
                </li>
                <li> 
                <Link href="/studentlist/bruce" >Burce</Link>
                </li>
            </ul> */}
        </div>
    )
}
// export async function getInitialProps(){
//     let data= await fetch("https://dummyjson.com/products");
// data = await data.json();
// console.log("test");
// return data;
// }