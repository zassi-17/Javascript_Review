// 自分が出す手を打ち込むフォーム
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーからえらんでください。');

// getJShand関数の結果をjs_handへ代入
let js_hand = getJShand();

// winLose関数の結果をjudgeへ代入
let judge = winLose(user_hand, js_hand);

// 結果を表示
alert('あなたが選んだ手は' + user_hand +'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です');

// 相手の手をランダムで作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// 自分の手と相手の手を比較して結果を作成する関数
function winLose(user, js) {
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } 
  else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } 
  else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}