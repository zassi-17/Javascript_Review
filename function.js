// alertString変数宣言
let alertString;

// alertString変数へaddString関数の結果を代入
alertString = addString("GATS");

// 結果をアラートで表示
alert(alertString);

// addString関数の引数strAを定義している
function addString(strA) {
  let addStr = "Hello" + strA;
  return addStr;
}