// Importando Funções
const {sum} = require('../src/math.js');
const {sub} = require('../src/math.js');
const {mult} = require('../src/math.js');
const {div} = require('../src/math.js');

describe('Funções matemáticas', ()=>{
    beforeAll(()=>{
        console.log('etapas antes de todos os testes')
    });
    beforeEach(()=>{
        console.log('etapas antes de cada teste')
    });
    it('Soma de dois números', ()=>{
        expect(sum(1,2)).toBe(3);
    });
    it('Subtração de dois números', ()=>{
        expect(sub(5,4)).toBe(1);
    });
    it('Multiplicação de dois números', ()=>{
        expect(mult(5,5)).toBe(25);
    });
    it('Divisão de dois números', ()=>{
        expect(div(10,2)).toBe(5);
    });
    afterAll(()=>{
        console.log('etapas depois de todos os testes')
    });
    afterEach(()=>{
        console.log('etapas depois de cada teste')
    });
})
