//Task 1. Print the numbers 58 to 98
//Task 2. Print all the even numbers between 412 to 456
//Task 3. Print all the odd numbers between 581 to 623

//Task:----1
/*
for( var i = 58; i <= 98; i++){
    console.log(i);
}
*/

//Task----2
/*
let num = 412;
while (num <= 456) {
  console.log(num);
  num += 2;
}
*/
//Task----3
/*
let num1 = 581;
while (num <= 623) {
  console.log(num1);
  num += 2;
}
*/

for(var i = 581; i <= 623; i++){
  if(i%2 == 0){
    continue;
      console.log(i);
  }
}