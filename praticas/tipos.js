var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var both_values = 10000;
both_values = '10000';
function showTotal(total) {
    if (typeof total === "string") {
        return "O total foi de ".concat(total, " , string");
    }
    return "O total foi de ".concat(total, " , number");
}
var both_types_array = [31, 'Janeiro', 2003];
console.log(showTotal(both_values));
//
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
var normal = new User('normal');
var super_user = new SuperUser('super-usuario');
function olaUsuario(usuario) {
    if (usuario instanceof SuperUser) {
        console.log('Bem vindo ADM');
        return 1;
    }
    console.log('Bem vindo usuario');
    return 0;
}
olaUsuario(normal);
olaUsuario(super_user);
