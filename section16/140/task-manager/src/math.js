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

const add = (a,b) =>{
    return new Promise((resolve,reject)=>{
           setTimeout(()=>{
               if(a<0 || b< 0){
                reject("the value of a and b must be greater than 0")
               }
               resolve(a+b);
           },2000)
    })
}


module.exports = {calculateTip,fahrenheitToCelsius,celsiusToFahrenheit,add}