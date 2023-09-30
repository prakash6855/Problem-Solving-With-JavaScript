const marks = {
    mathematics:75.25, 
    english:65, 
    hindi:80,
    sanskrit:35.45,
    science:99.50
}
// console.log(Object.keys(marks));
// console.log(Object.values(marks));
const marksArray = Object.values(marks);
console.log(marksArray);
let total = 0.0;
for(let i=0; i<marksArray.length; i++){
    console.log(marksArray[i]);
    total+=marksArray[i];
}
console.log(total);
const result= total/marksArray.length;
console.log(result.toFixed(2));
