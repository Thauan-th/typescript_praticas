function esperandoCallback(fn : (nome: string)=>string , nickName:string ):string {
    console.log('preparando fn')
    fn(nickName)
    return 'string'
}
//funcao que vai receber uma outra funcao que esta tipada para string 

function noReturn():void{
  console.log('sem retorno')
}