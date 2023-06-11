import Link from "next/link";

export default function StudentList(){
    return(
        <div>
            <h1>Student List</h1>
            <ul>
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
            </ul>
        </div>
    )
}