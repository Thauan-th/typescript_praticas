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
console.log(sum(num,num2))