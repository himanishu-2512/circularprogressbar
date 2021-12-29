const number=document.getElementById("number");
const value1=document.querySelector(".value1");
const outer=document.querySelector(".outer");
const submit=document.querySelector(".submit");
const color=document.getElementById("color");


const time=100;
var num=0;

submit.addEventListener("click",()=>{
num=0;
var color1=color.value;
var numb=setInterval(()=>{
    value1.innerHTML=`${num}%`
    num=num+1;
    outer.style.backgroundImage=`conic-gradient(${color1} ${num*3.6}deg,white ${num*3.6}deg)`

    if(num>number.value){
   clearInterval(numb);
    }
},time);
})