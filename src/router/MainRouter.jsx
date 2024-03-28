import React from 'react'
import { createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom';
import UserLayout from '../layout/UserLayout';
import Plants from '../components/dahsboard/Plants';
import Home from '../components/dahsboard/Home';
import Settings from '../components/dahsboard/Settings';
import Cart from '../components/dahsboard/Cart';

export const MainRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>

        <Route path="/" element={<UserLayout/>}>
        <Route index element={<Plants/>}/>
        {/* slash(/) is not needed for nested route */}
        <Route path="home" element={<Home/>}/>
        <Route path="setting" element={<Settings/>}/>
        <Route path="cart" element={<Cart/>}/>
        </Route>
       
        
      </Route>
    )
  );
  
