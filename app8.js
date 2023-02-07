//TODO 内置对象
//FIXME RegExp正则
var regexp = /\w\d\s/;
//FIXME Date日期
var date = new Date();
var date1 = new Date().getDate();
//FIXME Error错误
var error = new Error();
//TODO BOM  DOM
var list = document.querySelectorAll('#list li');
console.log(list);
var body = document.body;
console.log(body);
var div = document.querySelector('div');
console.log(div);
document.body.addEventListener('click', function (e) {
    console.log(e);
});
function promise() {
    return new Promise(function (resolve, reject) {
        resolve(1);
    });
}
promise().then(function (res) {
    console.log(res);
});
