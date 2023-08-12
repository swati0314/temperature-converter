// this is the JavaScript file 
let input = document.getElementById("input");
let result = document.getElementById("result");

let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");

let inputTypeValue, resultTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value();
resultTypeValue = resultType.value();

function myResult() {
	inputTypeValue = inputType.value;
	resultTypeValue = resultType.value;

	if(inputTypeValue === "Celsius" && resultTypeValue === "Fahrenheit") {
		result.value = (Number(input.value) * (9 / 5) ) + 32;
	} else if(inputTypeValue === "Celsius" && resultTypeValue === "Kelvin") {
		result.value = Number(input.value) + 273.15;
	} else if(inputTypeValue === "Celsius" && resultTypeValue === "Celsius") {
		result.value = input.value;
	} else if(inputTypeValue === "Fahrenheit" && resultTypeValue === "Celsius") {
		result.value = (5 / 9) * (Number(input.value) - 32);
	} else if(inputTypeValue === "Fahrenheit" && resultTypeValue === "Kelvin") {
		result.value = ((5 / 9) * (Number(input.value) - 32)) + 273.15;
	} else if(inputTypeValue === "Fahrenheit" && resultTypeValue === "Fahrenheit") {
		result.value = input.value;
	} else if(inputTypeValue === "Kelvin" && resultTypeValue === "Celsius") {
		result.value = Number(input.value) - 273.15;
	} else if(inputTypeValue === "Kelvin" && resultTypeValue === "Fahrenheit") {
		result.value = ((9 / 5) * (Number(input.value) - 273.15)) + 32;
	} else if(inputTypeValue === "Kelvin" && resultTypeValue === "Kelvin") {
		result.value = input.value;
	}
}