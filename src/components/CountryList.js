import React from "react";
import Country from "./Country";

const CountryList = ({countries}) => {
    const listOfMappedCountries = countries.map((country) => {
        return <Country 
                name={country.name.common} 
                capital={country.capital}
                population={country.population}
                flag={country.flags.png}/>
    })

    return (
        <div>
            <h3>Country List</h3>
            {listOfMappedCountries}
        </div>
    )
}

export default CountryList 