// Função Soma
function sum (a,b){
    return a + b;
}

// Função Subtração
function sub (a,b){
    return a - b;
}

// Função Multiplicação
function mult (a,b){
    return a * b;
}

// Função Divisão
function div (a,b){
    if (b === 0) {
        return "Não existe divisão por zero!";
    }
    const d = a / b;
    return d;
}

module.exports = {
    sum,
    sub,
    mult,
    div
};
