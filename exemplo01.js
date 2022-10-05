// Sintaxe para criar variável
// 1ª Forma: <identificador|nome> = <valor>;

// Boolean
bool = true; // true, false

// console: representa a tela de console
// console.log(msg) => função que imprime a msg na tela 
// typeof: retorna o tipo do dado
console.log(bool, typeof(bool));

// number (int, float, double)
inteiro = 10;
console.log(inteiro, typeof(inteiro));

altura = 1.8;
console.log('Altura', altura, typeof(altura));

// String
string01 = "Teste e Qualidade de Software - Aspas Duplas";
console.log('Aspas Duplas', string01, typeof(string01));

string02 = 'Teste e Qualidade de Software - Aspas Simples';
console.log('Aspas Simples', string02, typeof(string02));

string03 = `Teste e Qualidade de Software - Apóstofros`;
console.log('Apóstofros', string03, typeof(string03));

// null
nulo = null;
console.log(nulo, typeof(nulo));

// undefined: variável que não possue conteúdo e nem está associada
// a uma posição de memória (RAM) ainda
indefinida = undefined;
console.log(indefinida, typeof(indefinida));
console.log('Teste = ', typeof(teste));

// Exemplo de String com aspas internamente
string04 = '\"Texto entre aspas\" \`';
console.log(string04);