// no inicio...
// Um byte (8 bits) 2 elevado a 8 = 265 caracteres
// Símbolos, Pontuações, A-Z, a-z, 0-9

// Dois bytes (16 bits) - 65500+ caracteres
// +Símbolos, +Pontuações, A-Z, a-z, 0-9

// Unicode
// Quantidade de Bytes Variável - Expansível
// Suporta mais de 1 milhão de caracteres
// Atualmente tem mais de 100.000 caracteres atribuídos

// https://unicode-table.com/pt/

const texto =  'aʬc௵d';
console.log(texto.match(/\u02AC|\u0BF5/g));