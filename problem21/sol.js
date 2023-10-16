// Create a function called 'fullName' that takes the first part of your name and the last part of your name as parameters. 
// And it will return your full name as the output by concatenating the two parts of your name.

function nameMerge(firstName, lastName){
    let newName = firstName + " " + lastName;
    return newName;
}
(nameMerge("Peter", "Pablo"))
