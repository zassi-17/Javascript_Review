let nickname = "taro"
console.log(nickname)

nickname = "ichiro"
console.log(nickname)


// グローバルスコープなのでどこでも使える
// var str = "gats"

// ｙ（ローカル変数）はfooの中でしか使えない
// function foo() {
//   console.log(str)
//   var y = "hello"
// }

// foo()
// console.log(y)


// function foo() {
//   let x = "gats2"
//   {
//     let y = "hello gats"
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()

// let・coustはブロック内で変数宣言した場合、有効
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i)


var str = "GATS"

function foo() { 
  console.log(str)

  var str = "ガッツ"
  console.log(str)
}

foo()