import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SamplePage } from '../pages/SamplePage'

export const RoutesList = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SamplePage></SamplePage>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
