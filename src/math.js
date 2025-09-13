// Função Soma
const sum = (a,b)=>{
    return a + b;
}

module.exports = {sum};

// Função Subtração
const sub = (a,b)=>{
    return a - b;
}

module.exports = {sub};

// Função Multiplicação
const mult = (a,b)=>{
    return a * b;
}

module.exports = {mult};

// Função Divisão
const div = (a,b)=>{
    d = a / b;
    if (d == 0) {
        return "Não existe divisão por zero!";
    }
    return d;
}

module.exports = {div};
