import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <Link  className="text-sm text-2xl text-purple-900 underline  hover:text-blue-600 " href="/dashboard">Go Dashboard</Link>
      <h1>Hello world</h1>
      
    </main>
  )
}
