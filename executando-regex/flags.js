/*
    conceito de flags

    g -> global
    i -> ignore case
    
*/

const texto = 'Carlos assinou o abaixo-assinado.';
console.log(texto.match(/C|ab/)); // sem flag
console.log(texto.match(/c|ab/i)); // com flag i
console.log(texto.match(/ab|c/gi)); // com flag g e i