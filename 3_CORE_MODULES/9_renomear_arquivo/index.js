//modo usando constantes para fazer a nomeação
import fs from "fs"

const arqAntigo = 'arquivo.txt'
const arqNovo = 'novo.txt'

fs.rename(arqAntigo, arqNovo, function (err) {
    if(err) {
        console.log(err)
        return
    }

    console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}.`)
})

//modo usando o arquivo "cru", direto


/* fs.rename("arquivo.txt", "novo.txt", function (err) {
    if(err) {
        console.log(err)
        return
    }

    console.log(`O arquivo foi renomeado`)
})*/