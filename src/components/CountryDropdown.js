import DropdownItem from "./DropdownItem";

const CountryDropdown = ({countries, onCountrySelected}) => {

    const handleChange = function(evt) {
        const selectedCountry = countries[evt.target.value]
        onCountrySelected(selectedCountry);
    }

    const countryOptions = countries.map((country, index) => {
        return ( 
        <DropdownItem country={country} key={index} index={index} />
        )
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose Country
            </option>
            {countryOptions}
        </select>
    )
}

export default CountryDropdown
