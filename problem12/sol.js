// If more than 80000 rupees you will buy mac, if more than 60000 rupees you will buy gaming laptop, if more than 40000 rupees you will buy lenovo yoga computer, if more than 20000 rupees you will buy old laptop. Otherwise you will work with mobile.

let laptopprice = 50000;
if(laptopprice > 80000){
    console.log("Congratulations for being an owner of mac");
}else if(laptopprice <= 80000 && laptopprice > 60000){
    console.log("Congratulations for being an owner of gaming laptop");
}else if(laptopprice <= 60000 && laptopprice > 40000){
    console.log("Congratulations for beign an owner of Lenovo yoga computer");
}else if(laptopprice <= 40000 && laptopprice > 20000){
    console.log("Congratulations for being an owner of an old laptop")
}else{
    console.log("I will work with mobile")
}