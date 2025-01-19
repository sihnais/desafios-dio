let nameHero = "Astryd"
let xpHero = 0
let missoesConcluidas = 0

console.log("Nome do herói: " + nameHero)

let missoes = [
    ["1a", true, 100],
    ["2a", true, 200],
    ["3a", true, 300],
    ["4a", true, 400],
    ["5a", false, 500],
    ["6a", true, 600],
    ["7a", true, 700],
    ["8a", false, 800],
    ["9a", false, 900],
    ["10a", false, 1000]
]

console.log("Essa é a quantidade de XP que ganha ao concluir cada missão:")

const xps = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
let missao = 1

for(let i = 0; i < xps.length; i++){
console.log("A missão " + missao++ + " da " + xps[i] + " XPs")
}

console.log("Quais as missões " + nameHero + " concluiu?")

console.log("Completou a missão 1? " + missoes[0][1])

if(missoes[0][1]){
    missoesConcluidas += 1
    xpHero += missoes[0][2]
    console.log("Quantos XPs ela tem agora? " + xpHero)
}

console.log("Completou a missão 2? " + missoes[1][1])

if(missoes[1][1]){
    missoesConcluidas += 1
    xpHero += missoes[1][2]
    console.log("Quantos XPs ela tem agora? " + xpHero)
}

console.log("Completou a missão 3? " + missoes[2][1])

if(missoes[2][1]){
    missoesConcluidas += 1
    xpHero += missoes[2][2]
    console.log("Quantos XPs ela tem agora? " + xpHero)
}

console.log("Completou a missão 4? " + missoes[3][1])

if(missoes[3][1]){
    missoesConcluidas += 1
    xpHero += missoes[3][2]
    console.log("Quantos XPs ela tem agora? " + xpHero)
}

console.log("Completou a missão 5? " + missoes[4][1])

if(missoes[4][1]){
    missoesConcluidas += 1
    xpHero += missoes[4][2]
    console.log("Quantos XPs ela tem agora? " + xpHero)
}

console.log("Completou a missão 6? " + missoes[5][1])

if(missoes[5][1]){
    missoesConcluidas += 1
    xpHero += missoes[5][2]
    console.log("Quantos XPs ela tem agora? " + xpHero)
}

console.log("Completou a missão 7? " + missoes[6][1])

if(missoes[6][1]){
    missoesConcluidas += 1
    xpHero += missoes[6][2]
    console.log("Quantos XPs ela tem agora? " + xpHero)
}

console.log("Completou a missão 8? " + missoes[7][1])

if(missoes[7][1]){
    missoesConcluidas += 1
    xpHero += missoes[7][2]
    console.log("Quantos XPs ela tem agora? " + xpHero)
}

console.log("Completou a missão 9? " + missoes[8][1])

if(missoes[8][1]){
    missoesConcluidas += 1
    xpHero += missoes[8][2]
    console.log("Quantos XPs ela tem agora? " + xpHero)
}

console.log("Completou a missão 10? " + missoes[9][1])

if(missoes[9][1]){
    missoesConcluidas += 1
    xpHero += missoes[9][2]
    console.log("Quantos XPs ela tem agora? " + xpHero)
}

if (xpHero < 1000){
    console.log(nameHero + " completou o total de " + missoesConcluidas + " missões, conquistanto ao todo " + xpHero + " XPs e esta no nivel Ferro.")
}
if (xpHero > 1001 && xpHero < 2000){
    console.log(nameHero + " completou o total de " + missoesConcluidas + " missões, conquistanto ao todo " + xpHero + " XPs e esta no nivel Bronze.")
}
if (xpHero > 2001 && xpHero < 5000){
    console.log(nameHero + " completou o total de " + missoesConcluidas + " missões, conquistanto ao todo " + xpHero + " XPs e esta no nivel Prata.")
}
if (xpHero > 5001 && xpHero < 7000){
    console.log(nameHero + " completou o total de " + missoesConcluidas + " missões, conquistanto ao todo " + xpHero + " XPs e esta no nivel Ouro.")
}
if (xpHero > 7001 && xpHero < 8000){
    console.log(nameHero + " completou o total de " + missoesConcluidas + " missões, conquistanto ao todo " + xpHero + " XPs e esta no nivel Platina.")
}
if (xpHero > 8001 && xpHero < 9000){
    console.log(nameHero + " completou o total de " + missoesConcluidas + " missões, conquistanto ao todo " + xpHero + " XPs e esta no nivel Ascendente.")
}
if (xpHero > 9001 && xpHero < 10000){
    console.log(nameHero + " completou o total de " + missoesConcluidas + " missões, conquistanto ao todo " + xpHero + " XPs e esta no nivel Imortal.")
}
if (xpHero >= 10001){
    console.log(nameHero + " completou o total de " + missoesConcluidas + " missões, conquistanto ao todo " + xpHero + " XPs e esta no nivel Radiante.")
}