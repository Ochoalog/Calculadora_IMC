function verificar() {
    const inputPeso = document.querySelector('#peso');
    const inputAltura = document.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado("Peso inválido", false);
        return;
    }
    if (!altura) {
        setResultado("Altura inválido", false);
        return;
    }

    const imc = getImc(peso, altura);

    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC ${imc} (${nivelImc})`

    setResultado(msg, true);

}

function getNivelImc(imc) {
    const nivel = ["Abaixo do peso", "Peso normal", "Sobrepeso",
        "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"]


    if (imc > 0 && imc < 18.5) {
        return nivel[0]
    } if (imc < 25) {
        return nivel[1]
    } if (imc < 30) {
        return nivel[2]
    } if (imc < 35) {
        return nivel[3]
    } if (imc < 40) {
        return nivel[4]
    } if (imc > 40) {
        return nivel[5]
    }
}

function getImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2)
}

function criaP() {
    const p = document.createElement('p');
    return p
}

function setResultado(msg, isValid) {
    let res = document.querySelector('#resultado');
    res.innerHTML = '';
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    res.appendChild(p);
}

