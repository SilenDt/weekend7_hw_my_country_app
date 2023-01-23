import React from "react";
import "./Country.css"

const Country = ({name, capital, flag, population, coatOfArms}) => {


    return(
        <div className="country">
            <h2 className="name">{name}</h2>
            <h4 className="capital"><h4 className="underline">Capital: </h4>{!capital ? name + " has no capital" : capital}</h4>
            <h5 className="population">{population === 0 ? "No one lives in " + name : population + " people live here"}</h5>
            <h4 className="flag">Flag: </h4>
                <div>
                    <img  className="flag-pic" src={flag}/>
                </div>
            <h4 className="coatOfArms">{!coatOfArms ? <h4 className="red">"**This country does not have a Coat Of Arms**"</h4> : "Coat Of Arms: " }</h4>
                <div>
                    <img className="coatOfArms" src={coatOfArms}/>
                </div>
            </div>
    
    )
}

export default Country