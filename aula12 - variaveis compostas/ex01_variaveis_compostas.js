let numeros = [7, 80, 9, 74, 5, 47, 58, 27, 82, 63, 39, 21, 67, 7, 37, 89, 59, 58, 39, 18]


for(let posicao in numeros){
    numeros.sort()
    console.log(`A posição ${posicao} tem o valor ${numeros[posicao]}`)
}
