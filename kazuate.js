// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu2 = 0;
// そのほか，必要に応じて変数を宣言してもよい
let b,p;
// ボタンを押した後の処理をする関数 hantei() の定義
let d =document.querySelector("button#print");
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  let kaisu =document.querySelector("span#kaisu");
  kaisu2=kaisu2+1;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  b=document.querySelector('input[name="kaitou"]');
  yoso=Number(b.value);
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する 
  
  if(kaisu2<4){
    if(kaisu2===3 && yoso===kotae) {
        p =document.querySelector('p#result');
        p.textContent="Congratulation!";
    }else if(yoso===kotae){
      kaisu.textContent=kaisu2;
      p =document.querySelector('p#result');
      p.textContent="Congratulation!";
    }else {
      kaisu.textContent=kaisu2;
      if(kaisu2===3) {
        p =document.querySelector('p#result');
        p.textContent="もう挑戦できないよ！正解は"+kotae;
      }else{
        kaisu.textContent=kaisu2;
        if(kotae<yoso){
          p =document.querySelector('p#result');
          p.textContent="残念、その数字より下";
        }else{
          p =document.querySelector('p#result');
          p.textContent="残念、その数字より上";
        }
      }
    }
  }
  
  // ここまで: 正解判定する
}
d.addEventListener('click', hantei);

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録

// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録