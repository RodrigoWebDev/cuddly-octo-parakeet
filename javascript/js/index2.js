var comidaProibida = "veneno";

function alimentar_o_bebe(comida){
    if(comida === comidaProibida){
        console.log("O bebê não pode comer "+comida);
    }else{
        console.log("O bebe foi alimentado com "+comida);
    }
}

alimentar_o_bebe("veneno");
alimentar_o_bebe("Aroz");
alimentar_o_bebe("Morango");