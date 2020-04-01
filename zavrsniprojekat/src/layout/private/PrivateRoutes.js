import React from 'react'
import {Route,Redirect} from 'react-router-dom';
import {isLogin} from  '../../web_services/token_services'


const PrivateRoutes=({component:Component,...rest})=>{
  
    
    return(
        <Route {...rest} render={props=>(
            isLogin()?
            <Component {...props} />:
            <Redirect to="/login"/>
    
           
        )} />
    )
}



export default PrivateRoutes