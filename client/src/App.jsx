import { Route, Routes } from 'react-router'
import './App.css'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Wakeparks from './components/wakeparks/Wakeparks'
import Login from './components/login/Login'
import Logout from './components/logout/Logout'
import Register from './components/register/Register'
import CreatePark from './components/create/CreatePark'
import EditPark from './components/edit/EditPark'
import ParkDetails from './components/park-details/ParkDetails'
import PageNotFound from './components/page-not-found/PageNotFound'

import { UserContext } from './contexts/UserContext'
import AuthGuard from './guards/AuthGuard'
import GuestGuard from './guards/GuestGuard'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [authData, setAuthData] = useLocalStorage('auth',{});

  const userLoginHandler = (resultData) => {
    setAuthData(resultData);
  };

  const userRegisterHandler = (resultData) => {
    setAuthData(resultData);
  };

  const useLogoutHandler = () => {
    setAuthData({});
  };

  return (
    <UserContext.Provider value={{ ...authData, userLoginHandler, userRegisterHandler, useLogoutHandler }}>

      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/wakeparks" element={<Wakeparks />} />
        <Route path="/wakeparks/:parkId/details" element={<ParkDetails />} />
        <Route element={<AuthGuard />}>
          <Route path="/wakeparks/create" element={<CreatePark />} />
          <Route path="/wakeparks/:parkId/edit" element={<EditPark />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route element={<GuestGuard />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />

    </UserContext.Provider>
  )
}

export default App
