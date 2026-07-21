// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log('1件目の検索結果');
  console.log('経度:' + data.coord.lon);
  console.log('緯度:' + data.coord.lat);
  console.log('天気:' + data.weather[0].description);
  console.log('最低気温:' + data.main.temp_min);
  console.log('最高気温:' + data.main.temp_max);
  console.log('湿度:' + data.main.humidity);
  console.log('風速:' + data.wind.speed);
  console.log('風向:' + data.wind.deg);
  console.log('都市名:' + data.name);
}

// 課題5-1 の関数 printDom()
function printDom(data) {

  let x = document.createElement("div");
  x.setAttribute("id", "result");
  document.body.appendChild(x);

  let y = document.createElement("ul");
  x.appendChild(y);

  let z;

  z = document.createElement("li");
  z.textContent = "経度: " + data.coord.lon;
  y.appendChild(z);

  z = document.createElement("li");
  z.textContent = "緯度: " + data.coord.lat;
  y.appendChild(z);

  z = document.createElement("li");
  z.textContent = "天気: " + data.weather[0].description;
  y.appendChild(z);

  z = document.createElement("li");
  z.textContent = "最低気温: " + data.main.temp_min;
  y.appendChild(z);

  z = document.createElement("li");
  z.textContent = "最高気温: " + data.main.temp_max;
  y.appendChild(z);

  z = document.createElement("li");
  z.textContent = "湿度: " + data.main.humidity;
  y.appendChild(z);

  z = document.createElement("li");
  z.textContent = "風速: " + data.wind.speed;
  y.appendChild(z);

  z = document.createElement("li");
  z.textContent = "風向: " + data.wind.deg;
  y.appendChild(z);

  z = document.createElement("li");
  z.textContent = "都市名: " + data.name;
  y.appendChild(z);

  let a = document.createElement("img");
  a.setAttribute("src", "ImageNameHere.png");
  a.setAttribute("width", "300");
  x.appendChild(a);
}

// 課題6-1 のイベントハンドラ登録処理

let btn = document.querySelector("#btn");
btn.addEventListener("click", sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

  // 前回の検索結果を削除
  let d = document.querySelector("#result");
  if (d) {
    d.remove();
  }

  // セレクトボックスから都市IDを取得
  let s = document.querySelector("#country");
  let id = s.value;

  let url =
    "https://www.nishita-lab.org/web-contents/jsons/openweather/" +
    id +
    ".json";

  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

// 課題6-1: 通信が成功した時の処理
function showResult(resp) {

  let data = resp.data;

  if (typeof data === "string") {
    data = JSON.parse(data);
  }

  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
  console.log("Ajax 通信が終わりました");
}