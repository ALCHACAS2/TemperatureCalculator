function convertCelsiusToFahrenheit() {
  grados = document.getElementById("grados").value;
  var fahrenheit = grados * 1.8 + 32;
  document.getElementById("resultado-fahrenheit").textContent = fahrenheit;
  return fahrenheit;
}
function convertCelsiusToKelvin() {
  grados = document.getElementById("grados").value;
  var kelvin = parseFloat(grados) + 273.15;
  document.getElementById("resultado-kelvin").textContent = kelvin;
}
function convertFahrenheitToCelsius() {
  grados = document.getElementById("grados").value;
  var celsius = (grados - 32) / 1.8;
  document.getElementById("resultado").textContent = celsius;
  return celsius;
}
function convertFahrenheitToKelvin() {
  var celsius = convertFahrenheitToCelsius();
  var kelvin = celsius + 273.15;
  document.getElementById("resultado").textContent = kelvin;
}
function convertKelvinToFahrenheit() {
  var celsius = kelvinToCelsius();
  var fahrenheit = celsiusToFahrenheit(celsius);
  document.getElementById("resultado").textContent = fahrenheit;
}
function convertKelvinToCelsius() {
  grados = document.getElementById("grados").value;
  var celsius = parseFloat(grados) - 273.15;
  document.getElementById("resultado").textContent = celsius;
}
function kelvinToCelsius() {
  grados = document.getElementById("grados").value;
  return parseFloat(grados) - 273.15;
}
function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}
function todo(){
  convertCelsiusToFahrenheit();
  convertCelsiusToKelvin();
}