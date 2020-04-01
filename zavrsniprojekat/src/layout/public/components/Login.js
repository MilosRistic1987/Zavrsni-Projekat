import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../../../web_services/coetusApi'
import { setToken } from '../../../web_services/token_services';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    return (
        <div className='loginBody'>
            <div className='loginCard'>
                <div className='fingerDiv'>
                    <img className='imgFinger' src='./Fingerprint.png' alt='fingerprint'></img>
                </div>
                <div className='loginForm'>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        loginUser(username, password).then((res) => {
                            console.log(res);
                            setToken(res.data.token)
                            history.push("/home")

                        })

                    }}>
                        <input type='text' required placeholder='USERNAME' onInput={e => {
                            e.preventDefault();
                            setUsername(e.target.value);
                        }}></input>
                        <input type='text' required placeholder='PASSWORD'  pattern=".{6,}" title="6 or more characters" onInput={e => {
                            e.preventDefault();
                            setPassword(e.target.value);
                        }}></input>
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