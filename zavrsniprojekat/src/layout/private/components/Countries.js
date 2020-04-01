import React, {useState, useEffect} from 'react'
import Country from './Country'
import {getAllCountries} from '../../../web_services/countriesAPI'

const Countries = () =>{

    const [countries, setCountries]=useState([])
    const[uniqueOptions,setUniqueOptions]=useState([])
    let options=new Set()
    useEffect(()=>{
        getAllCountries().then(res=>{setCountries(res.data);
        res.data.forEach(el => {
            options.add(el.subregion)
        }); setUniqueOptions([...options])
    })
    },[])

return(<div className='countriesMainDiv'>
    <div className='selectDiv'>
        <select>
      {uniqueOptions.map(el=><option value={el}>{el}</option>)}      
        </select>
    </div>
<div className='allCoutries'>{countries.map(country=><Country country={country} key={country.id} />)}
</div>
<div className='paginationDiv'></div>
</div>
)
}
export default Countries