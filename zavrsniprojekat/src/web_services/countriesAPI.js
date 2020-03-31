import axios from 'axios'

const base_URL = "https://restcountries.eu/rest/v2"

const getAllCountries = ()=>{
  return  axios.get(`${base_URL}/all`)

} 

const getSerbiaStats=()=>{
  return axios.get(`${base_URL}/name/serb`)
}



export {getAllCountries,getSerbiaStats}