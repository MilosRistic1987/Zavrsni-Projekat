import React from 'react'
import { useHistory } from 'react-router-dom';


const Register = ()=>{
    const history=useHistory()
    return(
        <div className='loginBody'>
           
          <div className='loginCard'>
            <div className='fingerDiv'>
            <img className='imgReg' src='./reg.png' alt='registration'></img>
            </div>
            <div className='loginForm'>
                <form>
                    <input type='text' required placeholder='NAME'></input>
                    <input type='text' required placeholder='SURENAME'></input>
                    <input type='text' required placeholder='USERENAME'></input>
                    <input type='e-mail' required placeholder='EMAIL'></input>
                    <input type='password' required placeholder='PASSWORD'></input>
                    <input type='password' required placeholder='CONFIRM PASSWORD'></input>
                    <button  className='loginBtn regBtn' type='sumbit'><img className='btnIcon' src='./padlock.png' alt='logo' /></button>
                </form>
            </div>
            <div>
            </div>
         </div>
        </div>
       
    )
}

export default Register;