import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'

library.add(fab, fas);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
  },
  {
    path: '/pastes',
    element: (
      <>
        <NavBar />
        <Paste />
      </>
    ),
  },
  {
    path: '/pastes/:id',
    element: (
      <>
        <NavBar />
        <ViewPaste />
      </>
    ),
  },
])

function App() {
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  )
}

export default App;