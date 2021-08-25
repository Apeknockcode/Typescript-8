/*
    数组类型
*/
var arr1 = [1, 2, 3, 4];
var arr2 = [4, 5, 6, 7, 8];
// ----------
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (prev, current) { return prev + current; }, 0);
}
sum(1, 2, 4, 5, 6, 7);
