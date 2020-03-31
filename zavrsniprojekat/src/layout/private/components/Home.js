import React from 'react'
import Slideshow from './Slideshow'
import { useHistory } from 'react-router-dom'


const Home = (props)=>{
    const history = useHistory()
    return(<div className='home'>
        <div>
        <h1><span>W</span>orld <span>C</span>ountries</h1>
        </div>
        <Slideshow/>
        <div className='btnDiv'>
            <label>Discover World</label>
            <button  className='btnHome' onClick={(e)=>history.push("/explore")}><img className='btnIcon' src='./iconwhite.png' alt='logo' /></button>
        </div>
        
    </div>
    )
}
export default Home