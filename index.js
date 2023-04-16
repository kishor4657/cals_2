let output_screen=document.querySelector(".output-screen")
function display(num)
{
    output_screen.value+=num
}

// CLEAR METHOD
function cler()
{
    output_screen.value=""
}
function del()
{
output_screen.value=output_screen.value.slice(0,-1)
}
function calculate()
{
    try{
        output_screen.value=eval(output_screen.value)
    }
    catch(err)
    {
        alert("NOT USE SPECIAL KEY AT SAME TIME");
    }
}