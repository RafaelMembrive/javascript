let valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]



for(let pos=0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}



valores.sort() //comando para ordenar em order crscente
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}


let pos = valores.indexOf(4) //comando para encontrar um valor dentro do array
if (pos == -1) {
    console.log("Nao foi possivel encontrar o valor.")
} else {
    console.log(`O valor esta na posição ${pos}`)
}
