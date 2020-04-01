import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { registerUser } from '../../../web_services/coetusApi'


const Register = () => {
    const history = useHistory()
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [secondPassword, setSeconPassword] = useState("");
    const [email, setEmail] = useState("");
    return (
        <div className='registerBody'>
            <button className='backBtn' type='button' onClick={(e) => history.push("/login")}><img className='btnIcon' src='./back.png' alt='logo' /></button>
            <div className='registerCard'>
                <div className='fingerDiv'>
                    <img className='imgReg' src='./reg.png' alt='registration'></img>
                </div>
                <div className='loginForm'>
                    <form type='submit' onSubmit={(e) => {
                        e.preventDefault()
                        registerUser(name, surname, username, secondPassword, email).then((res) => {
                            console.log(res);
                            history.push("/login")
                        })
                    }}>
                        <input id='inpName' type='text' required placeholder='NAME' onInput={e => {
                            e.preventDefault();
                            setName(e.target.value);
                        }}></input>
                        <input id='inpSurName' type='text' required placeholder='SURENAME' onInput={e => {
                            e.preventDefault();
                            setSurname(e.target.value);
                        }}></input>
                        <input id='userName' type='text' required placeholder='USERENAME' onInput={e => {
                            e.preventDefault();
                            setUsername(e.target.value);
                        }}></input>
                        <input id='eMail' type='e-mail' required placeholder='EMAIL' onInput={e => {
                            e.preventDefault();
                            setEmail(e.target.value);
                        }} ></input>
                        <input id='pass' type='password' required placeholder='PASSWORD'   pattern=".{6,}"  title="6 or more characters" onInput={e => {
                            e.preventDefault();
                            setPassword(e.target.value);
                        }}></input>
                        <input id='confPass' onInput={e => {
                            e.preventDefault();
                            setSeconPassword(e.target.value);
                        }} type='password' required placeholder='CONFIRM PASSWORD' pattern=".{6,}" title="6 or more characters"></input>
                        <button className='loginBtn regBtn' type='sumbit' ><img className='btnIcon' src='./padlock.png' alt='logo' /></button>
                    </form>
                </div>
                <div>
                </div>
            </div>
        </div>

    )
}

export default Register;