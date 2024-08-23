import RootLayout from './layouts/RootLayout';
import Home from './components/Home/Home';
import WorkoutLog from './components/Log/WorkoutLog';
import Login from './components/Login/Login';
import Pricing from './components/Login/Pricing';
import About from './components/Login/About';
import CreateUser from './components/Login/CreateUser';
import Contact from './components/Login/Contact';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import './App.css'
import Charts from './components/Charts/Charts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path='login' element={<Login />}></Route>
      <Route path='pricing' element={<Pricing />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='createUser' element={<CreateUser />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='home' element={<Home />} />
      <Route path='log' element={<WorkoutLog />}></Route>
      <Route path='charts' element={<Charts />}></Route>
    </Route>
    
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
