import React from 'react'
import { Slide } from 'react-slideshow-image'
import Slideshow from './Slideshow'


const Home = ()=>{
    return(<div className='home'>
        <div>
        <h1><span>W</span>orld <span>C</span>ountries</h1>
        </div>
        <Slideshow/>
        <div className='btnDiv'>
            <label>Discover Serbia</label>
            <button className='btnHome'><img className='btnIcon' src='./iconwhite.png' alt='logo'></img></button>
        </div>
        
    </div>
    )
}
export default Home