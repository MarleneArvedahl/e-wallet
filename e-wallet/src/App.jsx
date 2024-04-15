import './App.css'
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import router from './router/router'

function App() {
 
  return (
    <main>
      <RouterProvider router={ router } />
    </main>
  )
}

export default App
