import React, {useState, useEffect} from 'react'
import './mycountryStyle.css';
import {getSerbiaStats} from '../../../web_services/countriesAPI'
import SerbiaCard from './SerbiaCard'


const MyCountry=()=>{
    const [serbia, setSerbia]=useState([])
    useEffect(()=>{
        getSerbiaStats().then(res=>setSerbia(res.data))
    },[])
    return(
        <div className='myCountry'>
            <div className='leftCountryside'>
                <div className='compositionPhotos'>
                    <img className="composition-photo composition-photo--1" src='./composition/comp1.jpg' alt='comp'/>
                    <img className="composition-photo composition-photo--2" src='./composition/comp2.jpg' alt='comp'/>
                    <img className="composition-photo composition-photo--3" src='/composition/comp3.jpg' alt='comp'/>
                    <img className="composition-photo composition-photo--4" src='/composition/comp4.jpg' alt='comp'/>
                    <img className="composition-photo composition-photo--5" src='/composition/comp5.jpg' alt='comp'/>
                    <img className="composition-photo composition-photo--6" src='/composition/comp6.jpg' alt='comp'/>
                    <img className="composition-photo composition-photo--7" src='/composition/comp7.jpg' alt='comp'/>
                    <img className="composition-photo composition-photo--8" src='/composition/comp8.jpg' alt='comp'/>
                </div>
            </div>
            <div className='rightCountryside'>
            {serbia.map(stats=><SerbiaCard stats={stats}  />)}
            </div>
          </div>
       
    )
}

export default MyCountry