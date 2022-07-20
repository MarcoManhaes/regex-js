const texto = `
Os e-mails dos convidados são:
    - fulano@xyz.com.br
    - ciclano@gmail.com
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com.br
`

console.log(texto.match(/[\w.]+@\w+\.\w+\.?\w+/g))
console.log(texto.match(/[\w.]+@\w+\.\w+\.?\w{0,2}/g))
