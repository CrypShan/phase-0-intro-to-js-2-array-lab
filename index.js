
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(Ralph) {
  cats.push(Ralph);

  console.log(cats);
}


function destructivelyPrependCat(Milo) {
  cats.unshift(Milo);
}


function destructivelyRemoveLastCat() {
  cats.pop();
}


function destructivelyRemoveFirstCat() {
  cats.shift();
}


function appendCat(name) {
  const newArray = [...cats, name];
  return newArray;
}


function prependCat(name) {
  const newArray = [name, ...cats];
  return newArray;
}


function removeLastCat() {
  const newArray = cats.slice(0, -1);
  return newArray;
}


function removeFirstCat() {
  const newArray = cats.slice(1);
  return newArray;
} ;


