let x,y,z,a,b;
b=document.querySelector("button#calc");
function wa(){
x=document.querySelector('input[name="left"]');
y=document.querySelector('input[name="right"]');
z = Number(x.value)+Number(y.value);
a=document.querySelector('span#answer');
a.textContent=z;
}
b.addEventListener('click', wa);