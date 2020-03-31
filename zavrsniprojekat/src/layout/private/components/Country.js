import React from 'react'

const Country = ({country})=>{
    let{name,capital,region,subregion,population,demonym,area,timezones,nativeName,currencies,flag,languages}=country
    const[first, rest, last] = timezones
    const tmzones= timezones.length <2? timezones : [first, "-",  last]
 
    return(<div className='cardCapsula'>
<div className='flagDiv' style={{backgroundImage:`linear-gradient(to bottom, rgb(247, 251, 223,1),rgb(247, 251, 223,0)),url(${flag})`}}>
    
</div>
<div className='cardTextDiv'>
<h2 className='cardHeading'>{name}</h2>
<h4 className='cardSubHeading'>{nativeName}</h4>
<label className='cardLbl'><span className='capitalLetter'>C</span>apital:{capital}</label>
<label className='cardLbl'><span className='capitalLetter'>R</span>egion:{region}</label>
<label className='cardLbl'><span className='capitalLetter'>S</span>ubregion:{subregion}</label>
<label className='cardLbl'><span className='capitalLetter'>N</span>ation:{demonym}</label>
<label className='cardLbl'><span className='capitalLetter'>L</span>anguages:{languages.map(el=>el.name).join(", ")}</label>
<label className='cardLbl'><span className='capitalLetter'>C</span>urrencies:{currencies.map(el=>el.name).join(", ")}</label>

</div>
<div className='cardStatDiv'>
    <div>
    <label className='lblStat'>{population.toLocaleString('de-DE')}</label>
    <small>Population</small>
    </div>
    <div>
    <label className='lblStat'>{area}</label>
    <small>Area</small>
    </div>
    <div>
    <label className='lblStatTimeZone'>{tmzones}</label>
    <small>Time Zone</small>
    </div>
</div>
    </div>)
}
export default Country