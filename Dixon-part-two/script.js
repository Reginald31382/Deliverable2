var rain= "";
var fertile;
var brandName;
var bushels = 50;
let asterisk = ""

for (let i = 0; i < rain; i++){
    asterisk +- "*"
};


rain = prompt("How many inches of rain fell?")
fertile = prompt("Did you use fertilizer?")

if(rain >= 20){
    bushels = bushels - .10 * bushels;
} else if (rain <= 10) {
    bushels = bushels - .20 * bushels
}
console.log(bushels)

if(fertile === "yes"){
    var brandName = prompt("Did you use premium or regular?");
} else console.log("The yield should be " + bushels + " bushels per acre.");

if(brandName === "premium"){
    console.log("The yield should be " + (rain = bushels + .15 * bushels) + " bushels per acre.");
}

if(brandName === "regular"){
    console.log("The yield should be " + (bushels = bushels - .10 * bushels) + " bushels per acre.");
}