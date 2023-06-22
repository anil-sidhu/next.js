export default async function getUser(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    if (!res.ok) throw new Error('failed to fetch user')

    return res.json()
}