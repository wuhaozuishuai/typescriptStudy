//FIXME 字符型
var str = '213';
var muban = "cext".concat(str);
console.log(muban);
//FIXME 数值型
var num = NaN;
var num1 = 123;
var num2 = Infinity; //无穷大
var num3 = 0xf00d;
console.log(num, num1, num2, num3);
//FIXME 布尔型
var bo = true;
var bo1 = Boolean(0);
console.log(bo, bo1);
//FIXME 空值 void--》undefined/null
var u = undefined;
var u1 = null;
console.log(u, u1);
//FIXME undefined/null--》undefined/null
var un = undefined;
var un1 = null;
console.log(un, un1);
//FIXME 函数返回值
//TODO 错误示范
// function fnVoid():void{
//     return 1223
// }
function fnVoid() {
    console.log(123);
}
fnVoid();
