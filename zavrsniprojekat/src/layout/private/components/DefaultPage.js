import React, {useState} from 'react'
import {BrowserRouter as Router,Link, Switch, Route} from 'react-router-dom'
import Login from '../../public/components/Login'
import Home from './Home'
import Countries from './Countries'
import Explore from './Explore'
import MyCountry from './MyCountry'
import ReactTooltip from "react-tooltip";
import {deleteToken} from "../../../web_services/token_services"
import { useHistory } from 'react-router-dom';


const DefaultPage = ()=>{
  const [content, setContent] = useState("");
  const history=useHistory()
    return(
        <Router>
<div className='header'>
  <div className='logoDiv'>
    <img className='logo' src='./logo.png' alt='logo' onClick={(e)=>history.push("/")}></img>
  </div>
  <div className='navBar'>
  <Link   to='/home'><h5 className='navText'>Home</h5></Link>
  <Link  to='/countries'><h5 className='navText'>Countries</h5></Link>
  <Link  to='/mycountry'><h5 className='navText' >My country</h5></Link>
  <Link  to='/login'><h5 className='navText' onClick={()=>{deleteToken(); history.push('/login')}} >LogOut</h5></Link>
  </div>
</div>
<Switch>
        <Route path="/logout">
        <Login  />
        </Route>
        <Route path="/countries">
        <Countries  />
        </Route>
        <Route path="/mycountry">
        <MyCountry />
        </Route>
        <Route path="/explore">
        <div className='exploreWorldDiv'>
      <Explore setTooltipContent={setContent} />
    <ReactTooltip>{content}</ReactTooltip>
    </div>
        </Route>
        <Route exact path="/home">
        <Home/>
        </Route>
      </Switch>

    </Router>
    )
}

export default DefaultPage;