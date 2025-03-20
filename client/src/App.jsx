import { Route, Routes } from 'react-router'
import './App.css'

import Header from './components/header/Header'
import Home from './components/home/Home'

function App() {

  return (
    <> 

    <Header />

    <Routes>
      <Route index element={<Home />} />
    </Routes>


    </>
  )
}

export default App
