function somar() {
    var num1 = parseFloat(document.getElementById('num1').value) || 0;
    var num2 = parseFloat(document.getElementById('num2').value) || 0;
    var resultado = num1 + num2;
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}
