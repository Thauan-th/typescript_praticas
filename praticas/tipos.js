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
console.log(sum(num, num2));
