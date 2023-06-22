import getUser from "../../../../lib/getUser"
import getUserPosts from "../../../../lib/getUserPosts"
import getAllUsers from "../../../../lib/getAllUsers"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"


import { notFound } from 'next/navigation'



export async function generateMetadata({ params: { userId } }) {
    const userData = getUser(userId)
    const user = await userData

    if (!user.name) {
        return {
            title: "User Not Found"
        }
    }

    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }

}

export default async function UserPage({ params: { userId } }) {
    const userData= getUser(userId)
    const userPostsData = getUserPosts(userId)

    //const [user, userPosts] = await Promise.all([userData, userPostsData])

    const user = await userData

    if (!user.name) notFound()

    return (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                {/* @ts-expect-error Server Component */}
                <UserPosts promise={userPostsData} />
            </Suspense>
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