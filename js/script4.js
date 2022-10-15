
function soma(){
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;
    if(valor1 == "" || valor2 == ""){
        alert("Por favor, preencha todo os valores!");
    }
    else{
    const result = parseInt(valor1)+parseInt(valor2);
    document.getElementById("resultado").innerText = result;}
}

function subtracao(){
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;
    if(valor1 == "" || valor2 == ""){
        alert("Por favor, preencha todo os valores!");
    }
    else{
    const result = parseInt(valor1)-parseInt(valor2);
    document.getElementById("resultado").innerText = result;}
}

function divisao(){
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;
    if(valor1 == "" || valor2 == ""){
        alert("Por favor, preencha todo os valores!");
    }
    else{
    const result = parseInt(valor1)/parseInt(valor2);
    document.getElementById("resultado").innerText = result;}
}

function multiplicacao(){
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;
    if(valor1 == "" || valor2 == ""){
        alert("Por favor, preencha todo os valores!");
    }
    else{
    const result = parseInt(valor1)*parseInt(valor2);
    document.getElementById("resultado").innerText = result;}
}


function calcular(){
if(document.getElementById('operador').value=="1"){
    soma();
    }
    else if(document.getElementById('operador').value=="2"){
    subtracao();
    }
    else if(document.getElementById('operador').value=="3"){
    divisao();
    } 
    else if (document.getElementById('operador').value=="4"){
        multiplicacao();
    }
}


const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener("click",calcular);
