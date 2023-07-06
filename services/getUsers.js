export default async function getUsers() {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return result.json();

}