const texto1 = "dia diatonico diafragma media wikipedia bom_dia melodia radial"

console.log(texto1.match(/\bdia\w+/g))
console.log(texto1.match(/\w+dia\b/g))
console.log(texto1.match(/\w+dia\w+/g))
console.log(texto1.match(/\bdia\b/g))

const texto2 = "dia diatônico diafragma, média wikipédia bom-dia melodia radial"
console.log(texto2.match(/\bdia\b/g))
console.log(texto2.match(/(\S*)?dia(\S*)?/g))
console.log(texto2.match(/([\wÀ-ü-]*)?dia([\wÀ-ü-]*)?/g))