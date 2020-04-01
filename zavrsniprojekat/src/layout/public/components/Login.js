import React from 'react'
import { Link } from 'react-router-dom'


const Login = ()=>{
    return(
        <div className='loginBody'>
          <div className='loginCard'>
            <div className='fingerDiv'>
            <img className='imgFinger' src='./Fingerprint.png' alt='fingerprint'></img>
            </div>
            <div className='loginForm'>
                <form>
                    <input type='text' required placeholder='USERNAME'></input>
                    <input type='text' required placeholder='PASSWORD'></input>
                    <button className='loginBtn' type='sumbit'><img className='btnIcon' src='./padlock.png' alt='logo' /></button>
                </form>
            </div>
            <div>
                <h4 className='loginFooter'>If you dont have account, please <Link className='registerLink' to='/register'>Register</Link> here</h4>
            </div>
         </div>
        </div>
    )
}

export default Login;