import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import SiteLayout from './components/SiteLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProgramsPage from './pages/ProgramsPage'
import TeamPage from './pages/TeamPage'
import GetInvolvedPage from './pages/GetInvolvedPage'
import ResourcesPage from './pages/ResourcesPage'
import StoriesPage from './pages/StoriesPage'

const router = createHashRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'programs', element: <ProgramsPage /> },
      { path: 'team', element: <TeamPage /> },
      { path: 'resources', element: <ResourcesPage /> },
      { path: 'get-involved', element: <GetInvolvedPage /> },
      { path: 'manifesto', element: <Navigate to="/about#manifesto" replace /> },
      { path: 'stories', element: <StoriesPage /> },
      // old links
      { path: 'contact', element: <Navigate to="/get-involved" replace /> },
      { path: 'solutions/*', element: <Navigate to="/programs" replace /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
