import React from "react";
import Country from "./Country";

const CountryList = ({countries}) => {
    const listOfMappedCountries = countries.map((country) => {
        return <Country 
                countryName={country.name.common} 
                countryCapital={country.capital}/>
    })

    return (
        <div>
            <h3>Country List</h3>
            {listOfMappedCountries}
        </div>
    )
}

export default CountryList 