import Link from 'next/link';
export default function Home() {
  return (
    <main className="bg-green-100">
      <Link href='/users'>Go to users page</Link>
      
    </main>
  )
}
