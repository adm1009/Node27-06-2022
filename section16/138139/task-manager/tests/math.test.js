// test("Hello World",()=>{

// });

// test("Error",()=>{
//     throw new Error("the test is getting failed ")
// });

const{calculateTip,fahrenheitToCelsius,celsiusToFahrenheit} = require("../src/math.js")

test("should check for calculate passing through argument",()=>{
     const  total = calculateTip(10,0.3);
     expect(total).toBe(13);
    //  if(total !== 13){
    //     throw new Error("Something went wrong")
    //  }
});
test("should check for calculate for default tipPercent",()=>{
    const  total = calculateTip(10);
    expect(total).toBe(12.5);
   //  if(total !== 13){
   //     throw new Error("Something went wrong")
   //  }
});
test("fahrenheittoCelsius",()=>{
    const celsius = fahrenheitToCelsius(32);

    expect(celsius).toBe(0);
});
test("celsiustoFahrenheit",()=>{
    const fahrenit = celsiusToFahrenheit(0);

    expect(fahrenit).toBe(32);
})