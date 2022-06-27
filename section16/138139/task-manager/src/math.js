const calculateTip = (amount,percent=0.25)=>{

    const tip= amount * percent;

    const total = amount + tip;

    return total;

}
const fahrenheitToCelsius = (temp) => {
    return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}


module.exports = {calculateTip,fahrenheitToCelsius,celsiusToFahrenheit}