//generic 
function showDatas<T>(args: T): string{ // <T> e <U> sao muito usadas para generics
    return `argumento generico: ${args}`
}
console.log(showDatas(10)) //aceitavel
console.log(showDatas(true)) //aceitavel
console.log(showDatas("argumentos") )//aceitavel
console.log(showDatas(['array']))
//fazendo uma funcao aceitar uma argumento generico , usado em casos especificos e melhor que o tipo : any
//
// constraints em generic
//servem para filtrar generics , como por exemplo as props de um obj

//Neste exemplo todo objeto deve ter ao menos uma propriedade chamada => name , nao importando se o mesmo
//possue outras propriedades , ao menos a prop name deve existir e a mesma deve ser uma string

function showProductName<T extends {name:string}>(obj: T): string{
    return `o nome do produto é ${obj.name}`
}   
const camisa = {  //nao validamos o objeto todo mas sim apenas o que nos interessa . Filtro muito usado
    name:"Polo Masculina",
    price:500
}
const carro = { // nao importa se o obj possue mil props , tem que ter name do tipo string
    name:"Lamborghini",
    price:500,
    ano:2011,
    modelo_roda:'importada'
}
const roda = { //objeto invalido ao filtro 
    price:500
}
console.log(showProductName(camisa))
console.log(showProductName(carro))
// console.log(showProductName(roda)) NAO SERA PERMITIDO
