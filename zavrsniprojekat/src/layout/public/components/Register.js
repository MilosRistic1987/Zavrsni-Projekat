import React from 'react'
import { useHistory } from 'react-router-dom';
import {registerUser} from '../../../web_services/coetusApi'


const Register = ()=>{
    const history=useHistory()
    return(
        <div className='registerBody'>
            <button className='backBtn' type='button' onClick={(e)=>history.push("/login")}><img className='btnIcon' src='./back.png' alt='logo' /></button>
           
          <div className='registerCard'>
            <div className='fingerDiv'>
            <img className='imgReg' src='./reg.png' alt='registration'></img>
            </div>
            <div className='loginForm'>
                <form type='submit' onSubmit={() => {
                let name = document.querySelector('#inpName').value
                let surName = document.querySelector('#inpSurName').value
                let userName = document.querySelector('#userName').value
                let eMail = document.querySelector('#eMail').value
                let pass = document.querySelector('#pass').value
                let confPass = document.querySelector('#confPass').value
                registerUser(name, surName,userName,eMail,confPass).then((res)=>{
                    console.log(res);
                    
                })
               
            }}>
                    <input id='inpName' type='text' required placeholder='NAME'></input>
                    <input id='inpSurName' type='text' required placeholder='SURENAME'></input>
                    <input id='userName' type='text' required placeholder='USERENAME'></input>
                    <input id='eMail' type='e-mail' required placeholder='EMAIL'></input>
                    <input id='pass' type='password' required placeholder='PASSWORD'></input>
                    <input id='confPass'id='inpName' type='password' required placeholder='CONFIRM PASSWORD'></input>
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