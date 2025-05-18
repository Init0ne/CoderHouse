function duplicarNumeros(numeros){
    
    const numerosDuplicados = numeros.map(numero => numero * 2)

    return numerosDuplicados
}

const resultado = duplicarNumeros([1,2,3,4,5])

console.log(resultado)