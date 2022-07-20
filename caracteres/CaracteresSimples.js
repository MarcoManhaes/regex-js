const texto = "1,2,3,4,5,6,a.b c!d?e"

const regexVirgula = /,/

//console.log(texto.split(regexVirgula))
console.log(texto.match(regexVirgula))
console.log(regexVirgula.exec(texto))


console.log(texto.match(/,/g))
console.log(texto.match(/A/g)) //não encontra pois procura pelo caractere A maiúsculo
console.log(texto.match(/A/gi)) //realiza a busca em todo o texto mesmo após encontrar a ocorrência
console.log(texto.match(/A/i)) // realiza a busca da primeira ocorrência e finaliza a busca
