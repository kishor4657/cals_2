let outputscreen=document.querySelector(".output-screen");
function display(num){
    outputscreen.value+=num; 
    
}
var validate=document.querySelector("#kk");
validate.addEventListener("click",jj)
function jj()
{
try{
    outputscreen.value=eval(outputscreen.value)
}
catch(err)
{
    alert("NOT USE SPECIAL KEY SAME TIME");
}
}
/*
function calculate()
{
try{
    outputscreen.value=eval(outputscreen.value)
}
catch(err)
{
    alert("NOT USE SPECIAL KEY SAME TIME");
}
}*/
function cler()
{
    outputscreen.value="";
}

function del()
{
    outputscreen.value=outputscreen.value.slice(0,-1);
}