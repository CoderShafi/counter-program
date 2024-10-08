//copyright is crime created by shafi

const label = document.getElementById("myLabel");
const incBtn = document.getElementById("incBtn");
const resetBtn = document.getElementById("resetBtn");
const decBtn = document.getElementById("decBtn");
let count = 0;
incBtn.onclick = function(){
    count++;
    label.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    label.textContent = count;
}
decBtn.onclick = function(){
    count--;
    label.textContent = count;
}
//created by shafi 
