import { Route, Routes } from 'react-router'
import './App.css'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Wakeparks from './components/wakeparks/Wakeparks'
import Login from './components/login/Login'
import Register from './components/register/Register'
import CreatePark from './components/create/CreatePark'
import ParkDetails from './components/park-details/ParkDetails'
import PageNotFound from './components/page-not-found/PageNotFound'

function App() {

  return (
    <> 

    <Header />

    <Routes>
      <Route index element={<Home />} />
      <Route path="/wakeparks" element={<Wakeparks />} />
      <Route path="/wakeparks/create" element={<CreatePark />} />
      <Route path="/wakeparks/:parkId/details" element={<ParkDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>

    <Footer />

    </>
  )
}

export default App
