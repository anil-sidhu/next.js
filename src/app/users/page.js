

import Link from "next/link"
import getAllUsers from "../../../lib/getAllUsers"


export default async function UsersPage() {
    const usersData = getAllUsers()

    const users = await usersData

    const content = (
        <div>
            <br />
            {users.map(user => {
                return (
                        <p key={user.id}>
                            <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                )
            })}
        </div>
    )

    return content
}