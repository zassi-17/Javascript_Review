let max = 100;
let num = 1;
let count = 0;

// maxの数字以上になるまで繰り返し掛け続け、掛けた回数を表示する式
while (num < max) {
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');