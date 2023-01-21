import React from "react";
import DropdownItem from "./DropdownItem";

const CountryDropdown = ({countries}) => {


    const countryOptions = countries.map((country, index) => {
        return (
        <DropdownItem country={country} index={index} />
        )
    })

    return (
        <select defaultValue="" >
            <option value="" selected>Choose Country
            </option>
            {countryOptions}
        </select>
    )
}

export default CountryDropdown
