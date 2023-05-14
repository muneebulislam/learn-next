

export default async function getAllUsers() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!users.ok) throw new Error('Could not get users');
  return users.json();
}
