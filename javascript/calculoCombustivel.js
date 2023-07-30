/*
Faça um algoritmo que efetue o cálculo da quantidade de litros de combustível gastos em uma viagem, 
sabendo-se que o carro faz 12 km com um litro. Deverão ser fornecidos o tempo gasto na viagem e a velodicade média.

distancia = tempo * velocidade
litros usados = distancia / 12

O algoritmo deverá apresentar valores da velocidade média, tempo gasto na viagem, distância percorrida e a 
quantidade de litros utilizados na viagem.
*/
var distancia=0, tempo = 3, velocidade = 80, litrosUsados=0, velocidadeMedia;

distancia = tempo * velocidade;
velocidadeMedia = distancia / tempo;
litrosUsados = distancia / 12;

console.log("velocidade média: " + velocidadeMedia + " km/h, Tempo de viagem: " + tempo + "h Distância Percorrida: " + distancia + "km Combustível Consumido: " + litrosUsados + "l");

