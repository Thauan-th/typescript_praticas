var numero = 0;
var nome = 'Thauan';
var ligado = false;
function logParams(params) {
    console.log(params);
    return;
}
function upperName(name) {
    logParams(name);
    return name.toUpperCase();
}
function multPer2(num) {
    logParams(num);
    return num * 2;
}
function toggle(toggle) {
    logParams(toggle);
    return !toggle;
}
upperName(nome);
multPer2(numero);
toggle(ligado);
