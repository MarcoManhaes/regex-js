const texto = "ABC [abc] a-c 1234"

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) // não define um range
console.log(texto.match(/[a-c]/g)) // intervalos usam a ordem da tabela UNICODE

// tem que respeitar a ordem da tabela UINICODE
//console.log(texto.match(/[a-Z]/g)) // erro: range out of order

