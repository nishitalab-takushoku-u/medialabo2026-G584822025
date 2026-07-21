//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
function kansu (){
	let p =document.createElement("p");
	p.textContent = campus.address;
	let u = document.querySelector('h2#addr');
	u.insertAdjacentElement('afterend', p);

	p = document.createElement("ul");
	let q = document.createElement("li");
	u =document.querySelector('h2#dept');
	for(let i=0; i<gakka.length; i=i+1){
	p = document.createElement("ul");
	q = document.createElement("li");
	q.textContent = gakka[i].name;   
	u =document.querySelector('h2#dept');
	u.insertAdjacentElement('afterend', p);
	p.insertAdjacentElement('beforeend', q);
	}
}
let b =document.querySelector("button#show");
b.addEventListener('click', kansu);