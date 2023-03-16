function convertCelsiusToFahrenheit(grados) {
    //   grados = document.getElementById("grados").value;
    var fahrenheit = (grados * 1.8 + 32).toFixed(2);
    return fahrenheit;
  }
  function convertCelsiusToKelvin(grados) {
    //   grados = document.getElementById("grados").value;
    var kelvin = (parseFloat(grados) + 273.15).toFixed(2);
    return kelvin;
  }
  function convertFahrenheitToCelsius(grados) {
    //   grados = document.getElementById("grados").value;
    var celsius = ((grados - 32) / 1.8).toFixed(2);
    return celsius;
  }
  function convertFahrenheitToKelvin(grados) {
    var celsius = convertFahrenheitToCelsius(grados);
    var kelvin = (parseFloat(celsius) + 273.15).toFixed(2);
    return kelvin;
  }
  function convertKelvinToFahrenheit(grados) {
    var celsius = kelvinToCelsius(grados);
    var fahrenheit = celsiusToFahrenheit(celsius).toFixed(2);
    return fahrenheit;
  }
  function convertKelvinToCelsius(grados) {
    //   grados = document.getElementById("grados").value;
    var celsius = (parseFloat(grados) - 273.15).toFixed(2);
    return celsius;
  }
  function kelvinToCelsius(grados) {
    //   grados = document.getElementById("grados").value;
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
    var grados = asignarControladoresDeEventos();
  //   document.getElementById("rango").value = grados;
    if (seleccion() == "c") {
      document.getElementById("resultado-celsius").textContent = grados;
      document.getElementById("resultado-fahrenheit").textContent =
        convertCelsiusToFahrenheit(grados);
      document.getElementById("resultado-kelvin").textContent =
        convertCelsiusToKelvin(grados);
    }
    if (seleccion() == "f") {
      document.getElementById("resultado-celsius").textContent =
        convertFahrenheitToCelsius(grados);
      document.getElementById("resultado-fahrenheit").textContent = grados;
      document.getElementById("resultado-kelvin").textContent =
        convertFahrenheitToKelvin(grados);
    }
    if (seleccion() == "k") {
      document.getElementById("resultado-celsius").textContent =
        convertKelvinToCelsius(grados);
      document.getElementById("resultado-fahrenheit").textContent =
        convertKelvinToFahrenheit(grados);
      document.getElementById("resultado-kelvin").textContent = grados;
    }
  }
  function validacionDeEntrada() {
    var result = document.getElementById(grados).value;
    if (result === null || result.trim() === "") {
      document.getElementById("resultado-celsius").textContent = "vacio";
    } else {
      document.getElementById("resultado-celsius").textContent = "lleno";
    }
  }
  function getValue() {
    todo();
    var valor = document.getElementById("rango").value;
    document.getElementById("resultado").textContent = valor;
    document.getElementById("grados").value = valor;
    return valor;
  }
  
  
  function asignarControladoresDeEventos() {
    var ultimoInputModificado;
    var grados;
    document.getElementById("rango").onchange = function () {
      ultimoInputModificado = "rangeInput";
    };
  
    document.getElementById("grados").onchange = function () {
      ultimoInputModificado = "textInput";
    };
  
    if (ultimoInputModificado === "rangeInput") {
      grados = document.getElementById("rango").value;
    } else {
      grados = document.getElementById("grados").value;
    }
    return grados;
  }
  //By ALCHACAS && Anders F.