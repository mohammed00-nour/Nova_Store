// import { useState } from 'react'
import './App.css'

import { Routes , Route} from "react-router-dom";

/* ===import pages=== */
import Home from './Pages/Home.jsx';
import Products from './Pages/Products.jsx';
import Manage from './Pages/Manage.jsx';

/* ===import components=== */
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  // const [count, setCount] = useState(0)


  return (
    <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>  
       
      <Footer />
    </div>
  )
}

export default App
