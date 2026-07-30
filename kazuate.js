// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random() * 10) + 1;
console.log("答え（デバッグ用）: " + kotae);

// 正解の数、予想回数
let kaisu = 0;
let owari = false;

// ボタン
let d = document.querySelector("button#print");

// ボタンを押した後の処理をする関数
function hantei() {

  // 回数表示用
  let span = document.querySelector("span#kaisu");

  // 結果表示用
  let p = document.querySelector("p#result");

  // 入力された予想
  let b = document.querySelector('input[name="kaitou"]');
  let yoso = Number(b.value);

  // 4回以上、または正解済みなら終了
  if (kaisu >= 3 || owari) {
    p.textContent = "答えは " + kotae + " でした．すでにゲームは終わっています";
    return;
  }

  // 予想回数を1増やす
  kaisu++;
  span.textContent = kaisu;

  // 正解判定
  if (yoso === kotae) {
    p.textContent = "正解です．おめでとう!";
    owari = true;
  } else {

    // 3回目で不正解
    if (kaisu === 3) {
      p.textContent = "まちがい．残念でした．答えは " + kotae + " です．";
    }

    // 予想が正解より小さい
    else if (yoso < kotae) {
      p.textContent = "まちがい．答えはもっと大きいですよ";
    }

    // 予想が正解より大きい
    else {
      p.textContent = "まちがい．答えはもっと小さいですよ";
    }
  }
}

// ボタンを押した時のイベントハンドラとして登録
d.addEventListener("click", hantei);