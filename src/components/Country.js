import React from "react";

const Country = ({countryName, countryCapital}) => {


    return(
        <div>
            <h2>Name: {countryName}</h2>
            <h4>Capital:{countryCapital}</h4>
        </div>
    )
}

export default Country