import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { routerBasename } from './lib/paths'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { SpherePage } from './pages/SpherePage'
import { WorkPage } from './pages/WorkPage'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'industrial-design', element: <SpherePage sphere="industrial" /> },
        { path: 'game-art', element: <SpherePage sphere="game" /> },
        { path: 'work/:slug', element: <WorkPage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'contact', element: <ContactPage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  { basename: routerBasename() },
)

export default function App() {
  return <RouterProvider router={router} />
}
