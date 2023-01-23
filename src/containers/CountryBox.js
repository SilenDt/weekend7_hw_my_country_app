
import React, { useEffect, useState } from "react"
import CountryList from "../components/CountryList"
import Header from "../components/Header"
import CountryDropdown from "../components/CountryDropdown"
import CountryDetail from "../components/CountryDetail"

const CountryBox = () => {

    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    
    useEffect(() => {
        getCountries()
    }, []) 

    const getCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
                .then(countriesData => setCountries(countriesData))
    }

    const onCountrySelected = function (country) {
        setSelectedCountry(country)
    }
    return (
        <div className="country-box">
            <Header/>
                {/* <CountryList countries={countries}/> */}
            <CountryDropdown countries={countries} onCountrySelected={onCountrySelected}
             />
             {selectedCountry ? <CountryDetail country={selectedCountry}/> : null}
        </div>
    )
}

export default CountryBox