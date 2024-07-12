import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import Home_page from './Pages/Home/Home_page';
import NoPage from './Pages/NoPage/NoPage';


function App() {
  const [count, setCount] = useState(0) 
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home_page />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
