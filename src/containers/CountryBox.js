
import React, { useEffect, useState } from "react"
import CountryList from "../components/CountryList"
import Header from "../components/Header"

const CountryBox = () => {

    const [countries, setCountries] = useState([])
    
    useEffect(() => {
        getCountries()
    }, [])

    const getCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
                .then(countriesData => setCountries(countriesData))
    }
    return (
        <div>
            <h1>CountryBox</h1>
            <Header/>
            <CountryList/>
        </div>
    )
}

export default CountryBox