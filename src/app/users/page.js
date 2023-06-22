

import Link from "next/link"
import getAllUsers from "../../../lib/getAllUsers"


export default async function UsersPage() {
    const usersData = getAllUsers()

    const users = await usersData

    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <br />
            {users.map(user => {
                return (
                    <>
                        <p key={user.id}>
                            <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                        <br />
                    </>
                )
            })}
        </section>
    )

    return content
}