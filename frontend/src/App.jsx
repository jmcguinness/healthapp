import { useState } from 'react'
import RootLayout from './layouts/RootLayout';
import Home from './components/Home/Home';
import WorkoutLog from './components/Log/WorkoutLog';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path='home' element={<Home />} />
      <Route path='log' element={<WorkoutLog />}></Route>
    </Route>
    
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
