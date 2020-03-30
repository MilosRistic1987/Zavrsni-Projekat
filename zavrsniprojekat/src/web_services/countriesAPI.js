import axios from 'axios'

const base_URL = "https://restcountries.eu/rest/v2"

const getAllCountries = ()=>{
  return  axios.get(`${base_URL}/all`)

} 



export {getAllCountries}