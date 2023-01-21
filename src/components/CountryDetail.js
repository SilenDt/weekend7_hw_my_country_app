import Country from "./Country"

const CountryDetail = ({country}) => {
    return (
        <div>
            <Country 
                name={country.name.common} 
                capital={country.capital}
                population={country.population}
                flag={country.flags.png}
                key={country.index}/>
        </div>
    )
}

export default CountryDetail