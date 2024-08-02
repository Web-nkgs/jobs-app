import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import JobDetail from './pages/JobDetail'
import AddJob from './pages/AddJob'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home />} />
        <Route path='/jobs/:id' element={<JobDetail />} />
        <Route path='/jobs/add' element={<AddJob />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />

}

export default App
