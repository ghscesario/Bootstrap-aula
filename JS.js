


function registerTry() {
    var nomeBootCheck = document.getElementById("nomeBoot").value;
    var emailBootCheck = document.getElementById("emailBoot").value;
    var senhaBootCheck = document.getElementById("senhaBoot").value;
    console.log(senhaBootCheck);
    if (nomeBootCheck != "" && emailBootCheck != "" && senhaBootCheck != "") {
        window.location.assign("Login.html");
    }
}

function loginTry() {
    var nomeLoginTry = document.getElementById("nomeLogin").value;
    var senhaLoginTry = document.getElementById("senhaLogin").value;
    if (nomeLoginTry == "Gabriel" && senhaLoginTry == "GabrielBulla") {
        window.location.assign("calculadora.html");
    }
    else {
        document.getElementById("ErroLogin").innerHTML = "Erro ao autenticar";
    }
}

function soma() {
    var n1 = document.getElementById("primeiroNumero").value;
    var n2 = document.getElementById("segundoNumero").value;
    var conv1 = Number(n1);
    var conv2 = Number(n2);
    var result = conv1 + conv2;
    document.getElementById("resultado").innerHTML = (result);
}

function subtracao() {
    var n1 = document.getElementById("primeiroNumero").value;
    var n2 = document.getElementById("segundoNumero").value;
    var conv1 = Number(n1);
    var conv2 = Number(n2);
    var result = conv1 - conv2;
    document.getElementById("resultado").innerHTML = (result);
}

function multiplicacao() {
    var n1 = document.getElementById("primeiroNumero").value;
    var n2 = document.getElementById("segundoNumero").value;
    var conv1 = Number(n1);
    var conv2 = Number(n2);
    var result = conv1 * conv2;
    document.getElementById("resultado").innerHTML = (result);
}

function divisao() {
    var n1 = document.getElementById("primeiroNumero").value;
    var n2 = document.getElementById("segundoNumero").value;
    var conv1 = Number(n1);
    var conv2 = Number(n2);
    var result = conv1 / conv2;
    document.getElementById("resultado").innerHTML = (result);
}

