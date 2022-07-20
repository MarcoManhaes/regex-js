const texto = `
CPF dos aprovados:
 - 046.168.546-96
 - 600.567.890-12
 - 765.998.345-23
`

console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))