function convertCelsiusToFahrenheit() {
  grados = document.getElementById("grados").value;
  var fahrenheit = grados * 1.8 + 32;
  return fahrenheit;
}
function convertCelsiusToKelvin() {
  grados = document.getElementById("grados").value;
  var kelvin = parseFloat(grados) + 273.15;
  return kelvin;
}
function convertFahrenheitToCelsius() {
  grados = document.getElementById("grados").value;
  var celsius = ((grados - 32) / 1.8).toFixed(2);
  return celsius;
}
function convertFahrenheitToKelvin() {
  var celsius = convertFahrenheitToCelsius();
  var kelvin = (celsius + 273.15).toFixed(2);
  return kelvin;
}
function convertKelvinToFahrenheit() {
  var celsius = kelvinToCelsius();
  var fahrenheit = (celsiusToFahrenheit(celsius)).toFixed(2);
  return fahrenheit;
}
function convertKelvinToCelsius() {
  grados = document.getElementById("grados").value;
  var celsius = (parseFloat(grados) - 273.15).toFixed(2);
  return celsius;
}
function kelvinToCelsius() {
  grados = document.getElementById("grados").value;
  return parseFloat(grados) - 273.15;
}
function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

const radios = document.getElementsByName("eleccion");

function seleccion() {
  let valorSeleccionado;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      valorSeleccionado = radios[i].id;
      break;
    }
  }
  return valorSeleccionado;
}

function todo() {
  if (seleccion() == "c") {
    document.getElementById("resultado-celsius").textContent = document.getElementById("grados").value;
    document.getElementById("resultado-fahrenheit").textContent = convertCelsiusToFahrenheit();
    document.getElementById("resultado-kelvin").textContent = convertCelsiusToKelvin();

  }
  if (seleccion() == "f") {
    document.getElementById("resultado-celsius").textContent = convertFahrenheitToCelsius();
    document.getElementById("resultado-fahrenheit").textContent = document.getElementById("grados").value;
    document.getElementById("resultado-kelvin").textContent = convertFahrenheitToKelvin();

  }
  if (seleccion() == "k") {
    document.getElementById("resultado-celsius").textContent = convertKelvinToCelsius();
    document.getElementById("resultado-fahrenheit").textContent = convertKelvinToFahrenheit();
    document.getElementById("resultado-kelvin").textContent = document.getElementById("grados").value;
  }
}
function validacionDeEntrada(){
  var result = document.getElementById(grados).value;
  if(document.getElementById(grados).value===null || document.getElementById(grados).t){

  }
}
