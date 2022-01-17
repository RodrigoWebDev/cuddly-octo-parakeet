    let estaLigado = false

    pegar("#on-off").addEventListener("click",function(){

    if(estaLigado){
        pegar("#lampada-desligada").style.display="inline"
        pegar("#lampada-ligada").style.display="none" 
        estaLigado = false
        pegar("#on-off").innerText="Ligar"
        pegar("body").style.backgroundColor="#383838"
    }else{
        pegar("#lampada-desligada").style.display="none"
        pegar("#lampada-ligada").style.display="inline" 
        estaLigado = true
        pegar("#on-off").innerText="Desligar"
        pegar("body").style.backgroundColor="#ffffff"
    }
})

function pegar(elemento){
   return document.querySelector(elemento)
}

function PlayAudio(){
    return document.querySelector()
}
