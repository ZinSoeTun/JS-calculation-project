let outputValue = document.getElementById("outputValue");
let number = document.getElementsByClassName ("number");
let calculate = document.getElementById("calculate");
let clear = document.getElementById("clear");

//for number using DOM
for (let i = 0; i < number.length; i++) {
   number[i].addEventListener("click", function(){
    outputValue.innerHTML += number[i].innerHTML;
   });
}
//for calculate
calculate.addEventListener ("click", function(){
    let result= eval(outputValue.innerHTML);
    outputValue.innerHTML = result;
   }
);
//for clear
clear.addEventListener ("click", function(){
    outputValue.innerHTML = "";
});
