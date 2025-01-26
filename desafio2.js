let resultRanked = countTotal(77, 23)

function countTotal(victories, loss){
    console.log("Houveram " + victories + " vitorias e " + loss + " derrotas");
    return victories - loss;
}

function levelPosition(){
    if(resultRanked <= 10){
        console.log("O Herói tem de saldo de " + resultRanked + " partidas e está no nível de Ferro")
    }
    if(resultRanked > 10 && resultRanked <= 20){
        console.log("O Herói tem de saldo de " + resultRanked + " partidas e está no nível de Bronze")
    }
    if(resultRanked > 20 && resultRanked <= 50){
        console.log("O Herói tem de saldo de " + resultRanked + " partidas e está no nível de Prata")
    }
    if(resultRanked > 50 && resultRanked <= 80){
        console.log("O Herói tem de saldo de " + resultRanked + " partidas e está no nível de Ouro")
    }
    if(resultRanked > 80 && resultRanked <= 90){
        console.log("O Herói tem de saldo de " + resultRanked + " partidas e está no nível de Diamante")
    }
    if(resultRanked > 90 && resultRanked <= 100){
        console.log("O Herói tem de saldo de " + resultRanked + " partidas e está no nível de Lendário")
    }
    if(resultRanked > 100){
        console.log("O Herói tem de saldo de " + resultRanked + " partidas e está no nível de Imortal")
    }  
}

levelPosition()