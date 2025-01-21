// impressao de numeros pares de 1 a 20
var c = 0

while (c <= 20) {
    console.log(`${c}`)
    c = c+2
}

//imprime os numeros de 10 a 15
var c = 10

do {
    console.log(`${c}`)
    c++
} while (c <= 15)

//codigo para quando encontra o multiplo de 5
var c = 1

while (c <= 100) {
    console.log(c)
    if (c % 5 === 0) { //meios para encontrar multiplos ou divisiveis
        break; //encerra o loop
    }
    c++
}
console.log("Loop encerrado por ter encontrado um valor multiplo de 5")

//contagem regressiva
var c = 10
while (c >= 1) {
    console.log(c)
    c--
}

// codigo encontra multiplos de 3, 5, e ambos e escreve mensagens avisando
var c = 1

do {
    console.log(c)
    if (c % 3 === 0 && c % 5 === 0) {
        console.log(`FizzBuzz ${c}`)
    } else if (c % 5 === 0) {
        console.log(`Buzz ${c}`)
    } else if (c % 3 === 0) {
        console.log(`Fizz ${c}`)
    }
    c++
} while (c <= 50)
