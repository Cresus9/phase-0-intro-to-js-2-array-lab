// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph){
    return (cats.splice(3, 0, "Ralph"));

}
function destructivelyPrependCat(Bob){
    return (cats.splice(0, 0, "Bob"));
}
function destructivelyRemoveLastCat(){
    return (cats.splice(2));
}

function destructivelyRemoveFirstCat(){
    return (cats.splice(0,1));
}
function appendCat(Broom){
    return ([...cats, "Broom"]);
}
function prependCat(Arnold){
    return (["Arnold", ...cats]);
}
function removeLastCat(){
    return (cats.slice(0, 2));
}

function removeFirstCat(){
    return (cats.slice(1, 3));
}





