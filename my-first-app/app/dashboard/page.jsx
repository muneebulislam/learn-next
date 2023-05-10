import Link from 'next/link';
export const metadata = {
  title: 'Next.js',
};
export default function DashboardPage() {
  return (
    <>
     <div>DashboardPage</div>   

      <Link className="text-sm text-2xl text-purple-900 underline  hover:text-blue-600" href="/">Go Home</Link>
    </>
   
  )
}
