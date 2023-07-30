//FORMA 1 DE CRIAR OBJETO
const pessoa = {
    nome: 'Maytê',
    sobrenome:  'Araújo'
};

console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);

//FORMA 2 DE CRIAR OBJETO
const pessoa1 = new Object();
pessoa1.nome = "Marilia";
pessoa1.sobrenome = "Santana";

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

//FORMA 3 DE CRIAR OBJETO
function criarPessoa(nome, sobrenome){
    return {nome, sobrenome};
}

const p1 = criarPessoa('Selma', 'Onório');
console.log(p1);