const texto1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!"
const texto2 = "There is a bgig fog in NYC"

// ? --> zero ou um (opcional)
const regex = /fogo?/gi // zero ou uma ocorrência do "o" que está logo a esquerda do interrogação

console.log(texto1.match(regex))
console.log(texto2.match(regex))