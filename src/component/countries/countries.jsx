
import React, { use, useState } from 'react';
import Country from '../country/country';
import './countries.css'
import country from '../country/country';

    const Countries = ({countriesPromise}) => {
    // 1st set usestate then set handler
    const [visitedCountries, setVisitedCountries ] = useState([]);  // countries count
    const [visitedFlags, setVisitedFlags] = useState([])             // flags count


    const handleVisitedCountries = (country) => {      //countries handle
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
    }


    const handleVisitedFlags = (flags) => {          //flags handle
   const newVisitedFlags = [...visitedFlags, flags]
   setVisitedFlags(newVisitedFlags)
    }


const countriesData = use(countriesPromise);
// console.log(countriesData)
const countries = countriesData.countries;
// console.log(countries)
    return (
        <div>
            <h2>my visited countries:{countries.length}</h2>
        <p>Total Country Visited: {visitedCountries.length}</p>
        
        <p>Total Visited Flags: {visitedFlags.length}</p>
        <ol>
            {
               visitedCountries.map(country => <li
               key = {country.cca3.cca3}
               >{country.name.common}</li>) 
            }
        </ol>

        <div className='visited-flags-container'>
        {
            visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)  //key add korar jonno extra index peremeter dewa hoice
        }
        </div>

           <div className='countries'>
            
            {
                countries.map(country => <Country 
                    key = {country.cca3.cca3}
                    country ={country}
                    handleVisitedCountries = {handleVisitedCountries}
                    handleVisitedFlags = {handleVisitedFlags}
                    ></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;