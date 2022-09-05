const texto = 'ABC [abc] a-c 1234';

console.log(texto.match(/[a-c]/g));
console.log(texto.match(/a-c/g)); // não é um intervalo

console.log(texto.match(/[A-z]/g)); // intervalos usam a ordem da tabela UNICODE

// tem que respeitar a ordem da tabela UNICODE
// console.log(texto.match(/[a-Z]/g)); // erro
// console.log(texto.match(/[4-1]/g)); // erro