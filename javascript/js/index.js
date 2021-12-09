var comidaProibida = "Veneno";



document.getElementById("botton-alimentar").addEventListener("click", function(){
    var comida = document.getElementById("input-comida").value;
    
    if(comida === comidaProibida){
        alert("O bebê não pode comer "+comidaProibida);
    }else{
        alert("O bebê pode comer "+comida);
    }
});

