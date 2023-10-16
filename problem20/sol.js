// Write a function that takes any name as uppercase or regular case and returns the name as lowercase as output.
/*
function changeCase(){
    let name = "PETER";
    console.log(name.toLowerCase());
}
changeCase();
*/


function changeCase(props){
    const transferCase = props.toLowerCase();
    return transferCase;
}
console.log(changeCase("LoVeLy"));