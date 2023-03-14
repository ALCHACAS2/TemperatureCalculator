function convertCelsiusToFahrenheit() {
  celsius = document.getElementById("celsius").value;
  /*--------°F = °C x 1.8 + 32---------*/
  var fahrenheit = celsius * 1.8 + 32;
  document.getElementById("resultado").textContent = fahrenheit;
}
function convertCelsiusToKelvin() {
  /*----------K = °C + 273.15------------*/
}
function convertFahrenheitToCelsius() {
  /*----------°C = (°F - 32) / 1.8-------*/
}
function convertFahrenheitToKelvin() {
  /*------°C = (°F - 32) / 1.8---K = °C + 273.15--*/
  /*------°C = ((°F - 32) / 1.8)+273.15--*/
}
function convertKelvinToFahrenheit() {
  /*-------°C = K - 273.15---°F = °C x 1.8 + 32----*/
}
function convertKelvinToCelsius() {
  /*------------°C = K - 273.15----------*/
}

/*-----------RESULTADOS-------------------*/
document.getElementById("resultado").textContent = convertCelsiusToFahrenheit();
