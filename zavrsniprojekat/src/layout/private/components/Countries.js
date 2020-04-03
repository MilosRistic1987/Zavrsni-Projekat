import React, { useState, useEffect } from 'react'
import Country from './Country'
import { getAllCountries } from '../../../web_services/countriesAPI'
import Select from 'react-select'
import ReactSearchBox from 'react-search-box'

const Countries = () => {

    const [sortOrder,setOrder]=useState('desc')
    const [countries, setCountries] = useState([])
    const [uniqueOptions, setUniqueOptions] = useState([])
    const [selected, setSelected] = useState([])
    const [indexes, setIndexes] = useState({ startIndex: 0, endIndex: 9 })
    const [searchValue, setSearchValue] = useState('')


    const handleChange = (event) => {
        const selected = event ? event : []
        setSelected(selected)
    }

    const handleSearch = (e) => {
        setSearchValue(e)
    }

    const HandleSort=(type)=>{
     setOrder(type)
    }

    const handleIndexesChange = (type) => {
        if (type === 'next') {
            setIndexes({ ...indexes, startIndex: indexes.startIndex + 9, endIndex: indexes.endIndex + 9 })
        } else { setIndexes({ ...indexes, startIndex: indexes.startIndex - 9, endIndex: indexes.endIndex - 9 }) }
    }


    useEffect(() => {
        let selectedOptions = selected.map(el => el.value)
        let options;
        setIndexes({ ...indexes, startIndex: 0, endIndex: 9 })
        getAllCountries().then(res => {
            let results = selectedOptions.length > 0 ? res.data.filter(item => selectedOptions.includes(item.subregion)) : res.data

            let filterList = searchValue ? results.filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase())) : results
            let sortedList= sortOrder === "asc"? filterList.sort((a,b)=>a.population-b.population):filterList.sort((a,b)=>b.population-a.population)
            setCountries(sortedList);
            options = [...new Set(res.data.map(el =>
                el.subregion
            ))];

            const data = options.map(el => { return { label: el, value: el } }).filter(el => el.value)
            setUniqueOptions(data)

        })
    }, [selected, searchValue, sortOrder])
    return (<div className='countriesMainDiv'>
        <div className='selectDiv'>
            <div>
                <Select className='react-select-componet' classNamePrefix="react-select"
                    placeholder='World regions'
                    isMulti={true}
                    options={uniqueOptions} value={selected} onChange={(e) => handleChange(e)}
                />
            </div>
            <div>
                <ReactSearchBox onChange={(e) => handleSearch(e)} placeholder="Search countries by name" ></ReactSearchBox>
            </div>
            <div>
                <button className='backBtn' type='button' title='Sort by population number' onClick={()=>HandleSort("asc")}><img className='btnIcon sortIcon' src='./sortUp.png' alt='logo' /></button>
                <button className='backBtn' type='button' title='Sort by population number'onClick={()=>HandleSort("desc")} ><img className='btnIcon sortIcon' src='./sortDown.png' alt='logo' /></button>
            </div>
        </div>
        <div className='allCoutries'>{countries.slice(indexes.startIndex, indexes.endIndex).map(country => <Country country={country} key={country.id} />)}
        </div>
        <div className='paginationDiv'>
            <button className='backBtn' type='button' disabled={indexes.startIndex === 0} onClick={() => handleIndexesChange('previous')}><img className='btnIcon' src='./back.png' alt='logo' /></button>
            <button className='backBtn' type='button' disabled={countries.length < indexes.endIndex} onClick={() => handleIndexesChange('next')}><img className='btnIcon' src='./forward.png' alt='logo' /></button>
        </div>
    </div>
    )
}
export default Countries
