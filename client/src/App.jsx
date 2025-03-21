import { Route, Routes } from 'react-router'
import './App.css'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Register from './components/register/Register'
import CreatePark from './components/create/CreatePark'
import PageNotFound from './components/page-not-found/PageNotFound'

function App() {

  return (
    <> 

    <Header />

    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<CreatePark />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>

    <Footer />

    </>
  )
}

export default App
