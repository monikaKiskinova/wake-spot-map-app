import { Route, Routes } from 'react-router'
import { useState } from 'react'
import './App.css'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Wakeparks from './components/wakeparks/Wakeparks'
import Login from './components/login/Login'
import Register from './components/register/Register'
import CreatePark from './components/create/CreatePark'
import EditPark from './components/edit/EditPark'
import ParkDetails from './components/park-details/ParkDetails'
import PageNotFound from './components/page-not-found/PageNotFound'

import { UserContext } from './contexts/UserContext'

function App() {
  const [authData, setAuthData] = useState({}); 

  const userLoginHandler = (resultData) => {
    setAuthData(resultData);
  };

  return (
    <UserContext.Provider value={{...authData, userLoginHandler}}>

    <Header />

    <Routes>
      <Route index element={<Home />} />
      <Route path="/wakeparks" element={<Wakeparks />} />
      <Route path="/wakeparks/create" element={<CreatePark />} />
      <Route path="/wakeparks/:parkId/details" element={<ParkDetails />} />
      <Route path="/wakeparks/:parkId/edit" element={<EditPark />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>

    <Footer />

    </UserContext.Provider>
  )
}

export default App
