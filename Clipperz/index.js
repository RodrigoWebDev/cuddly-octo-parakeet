get("#loginForm").addEventListener("input", function(){
    if(getValueUsuario().length && getValueSenha().length){
        get("#login-buttom").style.backgroundColor="orange"
        get("#login-buttom").removeAttribute("disabled")
    }else{
        get("#login-buttom").style.backgroundColor="#c0c0c0"
        get("#login-buttom").disabled = true
    }

})

get("#loginForm").addEventListener("submit", function(evento){
    evento.preventDefault()

})

get("#login-buttom").addEventListener("click", function(){
   console.log("sdasdasdasdasdasdasdadsd")         
}) 

function get(elemento){
    return document.querySelector(elemento)
}

function getValueUsuario(){
    return document.querySelector("#usuario").value
}

function getValueSenha(){
    return document.querySelector("#senha").value
}