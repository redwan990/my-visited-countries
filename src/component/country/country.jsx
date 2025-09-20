
import React, { useState } from 'react';
import './country.css'


const country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const [visited, setVisited] = useState(false);


const handleVisited = () => {
// if(visited){
// setVisited(false)
// }
// else{
//     setVisited(true)
// }
// setVisited(visited ? false : true);
setVisited(!visited)

handleVisitedCountries(country)


}
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
        <h3>Name: {country.name.common}</h3>  
        <p>population: {country.population.population}</p>
        <p>Area: {country.area.area} {country.area.area > 400000 ? "Big country" : "Small country"}</p>
        <button onClick={handleVisited}>{visited ? 'visited' : 'not visited'}</button>
        <button onClick={() => {handleVisitedFlags(country.flags.flags.png)}}>Add Visited Flags</button>         
        </div>
    );
};

export default country;