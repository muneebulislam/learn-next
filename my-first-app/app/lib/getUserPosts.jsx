export default async function getUserPosts(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,{cache: 'no-store',});
    if (!res.ok) throw new Error('Could not get user Posts');
  return res.json();
}