import { Outlet } from 'react-router-dom'
import { Footer, Header } from './Chrome'

export function Layout() {
  return (
    <div className="shell">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
