/* 
    Uma função que retorna um texto dessa froma: "Rodrigo gosta de laranjas", sendo que o nome a o gosto tem que ser dinamicos

    mostraTexto("Rodrigo", "laranjas") //Rodrigo gosta de laranjas
    mostraTexto("Daniel", "videogames") //Daniel gosta de videogames
*/

function mostraTexto(nome,gosto){
    return `${nome} gosta de ${gosto}`
}

console.log(mostraTexto("Rodrigo","chocolate"));
console.log(mostraTexto("Daniel","homens"));