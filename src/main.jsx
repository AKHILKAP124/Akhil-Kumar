import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Projects from './Pages/Projects.jsx'
import Bloges from './Pages/Bloges.jsx'
import Snippets from './Pages/Snippets.jsx'
import Resources from './Pages/Resources.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/blog',
    element: <Bloges />,
  },
  {
    path: '/snippets',
    element: <Snippets />,
  },
  {
    path: '/resources',
    element: <Resources />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
