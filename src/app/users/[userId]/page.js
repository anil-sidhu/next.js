import getAllUsers from "../../../../lib/getAllUsers"



export default async function UserPage({ params: { userId } }) {
    const usersData= getAllUsers()
    const users = await usersData;
    const data=users[userId-1]
console.log(data);
    return (
        <>
            <h2>{data.id}</h2>
            <h2>{data.name}</h2>
            <h2>{data.website}</h2>

        </>
    )
}

export async function generateStaticParams() {
    const usersData= getAllUsers()
    const users = await usersData
    return users.map(user => ({
        userId: user.id.toString()
    }))
}