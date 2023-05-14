export const metadata = {
    title: 'Users Page',
    description: 'Users page description',
  }

export default function UsersLayout({ children }) {
  return (
    <>
    <nav>Users nav</nav>
    <main>
        {children}
    </main>
    </>
  )
}