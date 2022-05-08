var array_number = [10, 20, 30, 40, 50];
var inference_number = array_number.map(function (item) { return item * 2; });
var array_string = ['a', 'e', 'i', 'o', 'u'];
var inference_string = array_string.map(function (item) { return item.toUpperCase(); });
var array_number_another = [100, 200];
var array_string_another = ['b', 'a'];
var num = 10;
var num2 = 20;
function sum(num, num2) {
    return num + num2;
}
var prices_obj = {
    prices: [10, 20, 30, 40, 50, 60, 7, 2]
};
function sumOfPrices(prices) {
    return prices.prices.reduce(function (prev, current) { return prev + current; }, 0);
}
var coord = {
    x: 90,
    y: 22222.22
};
function showCoords(coord) {
    console.log("Coordenada ".concat(coord.x, " e ").concat(coord.y));
}
showCoords(coord);
function showNumbers(a, b, c) {
    console.log("A" + a);
    console.log("B" + b);
    c && console.log("C" + c);
}
showNumbers(10, 20, 30);
showNumbers(10, 20);
