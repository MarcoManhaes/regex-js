const texto = "1,2,3,4,5,6,a.b c!d?e[f"

// para definir um classe ( ou conjunto) de caracteres usa []
const regexPares = /[2468]/g
console.log(texto.match(regexPares))

const texto2 = "João não vai passeae na moto."
const regexComESemAcento = /n[aã]/g
console.log(texto2.match(regexComESemAcento))