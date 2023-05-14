
import getAllUsers from "../lib/getAllUsers";
import Link from "next/link";
export default async function UsersPage() {
    const usersData =  getAllUsers();
    const users = await usersData;
    const usersContent = <section>
        <h2>
            <Link href="/">Go Home</Link>
        </h2>

        <br/>
       {users.map(user =>{
        return <>

        <p key={user.id}> 
        <Link href={`/users/${user.id}`}>{user.name}</Link>
        </p>
        <br/>

        </>
       })} 

    </section>
  return usersContent
}
