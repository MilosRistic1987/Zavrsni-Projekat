import React from 'react';



const SerbiaCard=({stats})=>{
    let{name,capital,region,subregion,population,demonym,area,timezones,nativeName,flag,callingCodes,latlng}=stats
   
    return (
        <div className='cardSerbiaCapsula'>
<div className='flagDiv flagDivSerbia' style={{backgroundImage:`linear-gradient(to bottom, rgb(247, 251, 223,1),rgb(247, 251, 223,0)),url(${flag})`}}>
<div className='overlay'>
</div>
</div>
<div className='cardTextDiv'>
<h2 className='cardHeading'>{name}</h2>
<h4 className='cardSubHeading'>{nativeName}</h4>
<label className='cardLbl-s'><span className='capitalLetter'>C</span>apital:{capital}</label>
<label className='cardLbl-s'><span className='capitalLetter'>R</span>egion:{region}</label>
<label className='cardLbl-s'><span className='capitalLetter'>S</span>ubregion:{subregion}</label>
<label className='cardLbl-s'><span className='capitalLetter'>N</span>ation:{demonym}</label>
<label className='cardLbl-s'><span className='capitalLetter'>C</span>alling code:{callingCodes}</label>
<label className='cardLbl-s'><span className='capitalLetter'>L</span>at and <span className='capitalLetter'>L</span>ng:{latlng}</label>
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
    <label className='lblStat'>{timezones}</label>
    <small>Time Zone</small>
    </div>
</div>
    </div>)}


export default SerbiaCard