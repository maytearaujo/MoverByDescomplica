/*
Para fazer uma promoção, os comerciantes estão procurando aumentar suas vendas oferecendo desconto. 
Faça um algoritmo que possa receber um valor de um produto e que escreva o novo valor tendo em vista que o 
desconto foi de 9%
 */

var valorProduto = 1000;
var desconto = 9/100;
var novoValor = valorProduto-(valorProduto * desconto);

console.log("Novo Preço: "+ novoValor);