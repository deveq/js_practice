// Spread Operator

let drinks = {
    caffe: 'latte',
    coca: 'cola'
}

let newDrinks = {
    lemon: 'tea',
    orange: 'juice',
    drinks
}

console.log(newDrinks);
/* 
{
    lemon: "tea",
    orange: "juice",
    drinks: {
        caffe: "latte", 
        coca: "cola"
    }
}
caffe와 coca가 lemon,oragne와 동일한 레벨에 있게 하려면

*/

let newDrinks2 = {
    lemon : 'tea',
    oragne : 'juice',
    ...drinks
};

console.log(newDrinks2);

/* 
{
    caffe: "latte",
    coca: "cola",
    lemon: "tea",
    oragne: "juice"
}
*/