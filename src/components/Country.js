import React from "react";

const Country = ({countryName, countryCapital, flag}) => {


    return(
        <div>
            <h2>Name: {countryName}</h2>
            <h4>Capital:{countryCapital}</h4>
            <img src={flag}/>
        </div>
    )
}

export default Country