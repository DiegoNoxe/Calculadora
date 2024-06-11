let n1 = document.getElementById('one')
let n2 = document.getElementById('two')
let n3 = document.getElementById('result');

function calcular(operacao)
{
    let num1 = parseFloat(n1.value)
    let num2 = parseFloat(n2.value)
    let resultado;
}

switch(operacao)
{
    case 1:
        resultado = num1+num2;
        break;
    case 2:
        resultado = num1 - num2;
        break;
    case 3:
        resultado = num1 * num2;
        break;
    case 4:
        resultado = num1 / num2;
        break;
}

n3.innerHTML = resultado;