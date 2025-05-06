import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './assets/component/Navbar'
import Sign_up from './pages/Sign_up.jsx'
import Home from './pages/Home.jsx'
import LoginPage from './pages/Login.jsx'
import Getdata from './pages/Getdata.jsx'
import Update from './pages/update.jsx'
import Services from './pages/Services.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/update/:id" element={<Update />} />
          <Route path='/data' element={<Getdata/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/signup' element={<Sign_up/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App