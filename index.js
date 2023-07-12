// Write your solution here!
let cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function appendCat(name){
    let newCat=[...cats, name];
    return newCat;
}

function prependCat(name){
    let newCatTwo=[name, ...cats];
    return newCatTwo;
}

function removeLastCat(){
    let removeCat= cats.slice(0, 2);
    return removeCat;
}

function removeFirstCat(){
    let removeCatTwo=cats.slice(-2);
    return removeCatTwo;
}
