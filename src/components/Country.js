import React from "react";
import "./Country.css"

const Country = ({name, capital, flag, population}) => {


    return(
        <div className="country">
            <h2 className="name">{name}</h2>
            <h4 className="capital">Capital: {!capital ? name + " has no capital" : capital}</h4>
            <h5 className="population">{population === 0 ? "No one lives in " + name : population + " people live here"}</h5>
            <img className="flag" src={flag}/>
        </div>
    )
}

export default Country