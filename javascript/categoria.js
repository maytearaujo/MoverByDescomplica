var produtos = [
    {id: 1, descricao: 'SmartPhone', categoria: 'Eletrônico'},
    {id: 2, descricao: 'Notebook', categoria: 'Eletrônico'},
    {id: 3, descricao: 'Geladeira', categoria: 'Eletrodoméstico'},
    {id: 4, descricao: 'Liquidificador', categoria: 'Eletrodoméstico'},
]

function retornaEletronico(valor){
    if(valor.categoria == 'Eletrônico'){
        return valor
    }
}


var produtosEletronicos = produtos.filter(retornaEletronico);

produtosEletronicos.forEach(produtoEletro =>{
    console.log(produtoEletro.descricao);
})
