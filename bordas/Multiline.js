const texto = `
Leo é muito legal
Emanuel foi jogar em sergipe
Bianca é casada com Habib
`

console.log(texto.match(/\n/g))
console.log(texto.match(/^(\w).+\1$/gim))