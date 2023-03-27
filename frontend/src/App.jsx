import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { logo } from './assets'
import { Home, Postulate } from "./pages"

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white 
      sm: px-8 py-4 bordder-b border-b-[#e6ebf4]'>
        <Link to="/"
        className='w-28 object-contain'>
          <img src={logo} alt='logo'/>
        </Link>

        <Link to='/postulate'
        className='font-inter font-medium bg-[#CDB0EE] text-white px-4 py-2'
        >
          Create
        </Link>
      </header>
      <main>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/postulate' element={ <Postulate /> }/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App