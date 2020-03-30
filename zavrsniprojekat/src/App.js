import React from 'react';
import {BrowserRouter,Switch,Redirect} from 'react-router-dom'
import PrivateRoutes from "./layout/private/PrivateRoutes"
import PublicRoutes from './layout/public/PublicRoutes'
import Login from './layout/public/components/Login'
import DefaultPage from './layout/private/components/DefaultPage'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <PublicRoutes component={Login} path='/login' />
      <PrivateRoutes component={DefaultPage} path='/home' />
    <Redirect from='/' to='home'/>
    </Switch>
    </BrowserRouter>
    
)
  }

export default App;
