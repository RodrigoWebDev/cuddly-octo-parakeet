let estaLigado = false

document.querySelector("#on-off").addEventListener("click",function(){
    if(estaLigado){
        document.querySelector("#lampada-desligada").style.display="inline"
        document.querySelector("#lampada-ligada").style.display="none" 
        estaLigado = false 
    }else{
        document.querySelector("#lampada-desligada").style.display="none"
        document.querySelector("#lampada-ligada").style.display="inline" 
        estaLigado = true   
    }
})