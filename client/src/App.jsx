import { Route, Routes } from 'react-router'
import './App.css'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'

function App() {

  return (
    <> 

    <Header />

    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <Route index element={<Login />} /> */}
    </Routes>

    <Footer />

    </>
  )
}

export default App
