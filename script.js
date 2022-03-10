function ConverterDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 5;
    console.log(valorEmReal);
  
    var elementoValorConvertido = document.getElementById("valorConvertidoEmDolar");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal.toFixed(2);
    var bitcoin = valorEmReal.toFixed(2) * 0.0000047;
    elementoValorConvertido.innerHTML = valorConvertido + "<br>O resultado em bicoin é ₿ " + bitcoin.toFixed(5);
  }

  function ConverterEuro() {
    var valorElemento = document.getElementById("valorEuro");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 5.53;
    console.log(valorEmReal);
  
    var elementoValorConvertido = document.getElementById("valorConvertidoEmEuro");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal.toFixed(2);
    var bitcoin = valorEmReal.toFixed(2) * 0.0000047;
    elementoValorConvertido.innerHTML = valorConvertido + " <br>O resultado em bicoin é ₿ " + bitcoin.toFixed(5);
  }