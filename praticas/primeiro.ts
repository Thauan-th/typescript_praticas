const numero:number =0

const nome:string = 'Thauan'

const ligado:boolean = false

function logParams(params:any){
    console.log(params)
    return
}

function upperName(name:string){
    logParams(name)
    return name.toUpperCase()
}
function multPer2(num:number){
    logParams(num)
    return num * 2
}
function toggle(toggle:boolean){
    logParams(toggle)
    return !toggle
}
upperName(nome)
multPer2(numero)
toggle(ligado)
//
let text_annotation:string = 'Annotation'
let text_infererence = "Inference" 