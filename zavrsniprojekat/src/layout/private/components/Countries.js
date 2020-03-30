import React, {useState, useEffect} from 'react'
import Country from './Country'
import {getAllCountries} from '../../../web_services/countriesAPI'

const Countries = () =>{
    const [countries, setCountries]=useState([])
    useEffect(()=>{
        getAllCountries().then(res=>setCountries(res.data))

    },[])
return(<div className='countriesMainDiv'>
    <div className='selectDiv'></div>
<div className='allCoutries'>{countries.map(country=><Country country={country} key={country.id} />)}
</div>
<div className='paginationDiv'></div>
</div>
)
}
export default Countries