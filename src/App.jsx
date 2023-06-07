import React, { useState } from 'react'
import {
  Routes, Route
} from 'react-router-dom'


import Admin from './components/admin/admin'
import Home from './components/home/home'
import AdminLog from './components/log/LoginAdmin'
import AdminSearch from './components/admin/admin-parametr/search'
import PuplisList from './components/admin/admin-parametr/puplisList'
import Support from './components/admin/admin/Support'
import Contact from './components/contact/contact54'
import Register from './components/registerforai/Register'
export default function App() {

  const [davomat, setDavomat] = useState()

  return (
    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/sortify-admin-54-maktab==1' element={<Admin setDavomat={setDavomat} davomat={davomat} />} ></Route>
      <Route path='AdminLog' element={<AdminLog />} ></Route>
      <Route path='/admin-search' element={<AdminSearch setDavomat={setDavomat} davomat={davomat} />} > </Route>
      <Route path='/puplisList' element={<PuplisList setDavomat={setDavomat} davomat={davomat} />} ></Route>
      <Route path='/support' element={<Support />} ></Route>
      <Route path='/Contact' element={<Contact />} > </Route>
      <Route path='/Register' element={<Register />} ></Route>
    </Routes>
  )
}
