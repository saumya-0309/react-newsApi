import './App.css'
import Footer from './Compontes/Footer'
import Navbar from './Compontes/Navbar'
import {Outlet} from "react-router-dom"

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
     <Footer/>
    </>
  )
}

export default App
