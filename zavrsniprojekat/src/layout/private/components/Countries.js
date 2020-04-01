import React, { useState, useEffect } from 'react'
import Country from './Country'
import { getAllCountries } from '../../../web_services/countriesAPI'
import Select from 'react-select'

const Countries = () => {


    const [countries, setCountries] = useState([])
    const [uniqueOptions, setUniqueOptions] = useState([])
    const [selected, setSelected] = useState([])
    const [indexes, setIndexes] = useState({ startIndex: 0, endIndex: 9 })


    const handleChange = (event) => {
        const selected = event ? event : []
        setSelected(selected)
    }
    const handleIndexesChange = (type)=>{
        if(type === 'next'){
            setIndexes({...indexes, startIndex:indexes.startIndex+9, endIndex:indexes.endIndex+9})
        }else{setIndexes({...indexes, startIndex:indexes.startIndex-9, endIndex:indexes.endIndex-9})}
    }


    useEffect(() => {
        let selectedOptions = selected.map(el => el.value)
        console.log(selectedOptions)
        let options;
        getAllCountries().then(res => {
            let results = selectedOptions.length > 0 ? res.data.filter(item => selectedOptions.includes(item.subregion)) : res.data
            setCountries(results);
            options = [...new Set(res.data.map(el =>
                el.subregion
            ))];

            const data = options.map(el => { return { label: el, value: el } }).filter(el => el.value)
            setUniqueOptions(data)

        })
    }, [selected])
    return (<div className='countriesMainDiv'>
        <div className='selectDiv'>
            <Select className='react-select-componet' classNamePrefix="react-select"
                isMulti={true}
                options={uniqueOptions} value={selected} onChange={(e) => handleChange(e)}
            />

        </div>
        <div className='allCoutries'>{countries.slice(indexes.startIndex, indexes.endIndex).map(country => <Country country={country} key={country.id} />)}
        </div>
        <div className='paginationDiv'>
            <button className='backBtn' type='button' disabled={indexes.startIndex === 0} onClick={()=>handleIndexesChange('previous')}><img className='btnIcon' src='./back.png' alt='logo' /></button>
            <button className='backBtn' type='button' disabled={countries.length < indexes.endIndex} onClick={()=>handleIndexesChange('next')}><img className='btnIcon' src='./forward.png' alt='logo' /></button>
        </div>
    </div>
    )
}
export default Countries
