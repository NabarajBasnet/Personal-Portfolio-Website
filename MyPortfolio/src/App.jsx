import './App.css'
import {Routes, Route, Form} from 'react-router-dom'
import {Home, About, Portfolio, Services, Contact} from './pages/index'
import {Navbar, Footer} from './components/common/index'



function App() 
{
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='portfolio' element={<Portfolio/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
