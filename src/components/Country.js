import React from "react";

const Country = ({name, capital, flag, population}) => {


    return(
        <div>
            <h2>{name}</h2>
            <h4>{!capital ? name + " has no capital" : name + "'s capital is " + capital}</h4>
            <h5>{population === 0 ? "No one lives in " + name : population + " people live in " + name}</h5>
            <img src={flag}/>
        </div>
    )
}

export default Country