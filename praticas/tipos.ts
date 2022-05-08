let array_number:number[] = [10,20,30,40,50]
let inference_number = array_number.map(item=>item*2)

let array_string:string[] =['a','e','i','o','u']
let inference_string = array_string.map(item=>item.toUpperCase())

const array_number_another: Array<number> = [100,200]
const array_string_another: Array<string> = ['b','a']

let num:number = 10
let num2:number =20

function sum(num:number,num2:number):number{
    return num + num2
}

const prices_obj = {
    prices : [10,20,30,40,50,60,7,2]
}

function sumOfPrices(prices: {prices:number[]}){
    return prices.prices.reduce((prev,current)=>prev+current ,0)
}
const coord = {
    x : 90 ,
    y : 22222.22
}
function showCoords(coord : {x:number,y:number}){
    console.log(`Coordenada ${coord.x} e ${coord.y}`)
}
showCoords(coord)

function showNumbers(a:number,b:number,c?:number ){
    console.log("A" + a)
    console.log("B" + b)
    c && console.log("C" +  c)
}
showNumbers(10,20,30)
showNumbers(10,20)

let both_values: string | number = 10000
both_values = '10000'

function showTotal(total: string|number){
    if(typeof total === "string"){
        return  `O total foi de ${total} , string`
    }
    return `O total foi de ${total} , number`
}
const  both_types_array : Array<string | number> = [31,'Janeiro',2003]

console.log(showTotal(both_values))



