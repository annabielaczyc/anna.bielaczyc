let rodzic = document.getElementById('parFirst');
console.log(rodzic.parentNode);

// dzieci wezly
// let wezly = document.getElementById('parFirst').childNodes;
// console.log(wezly);
// console.log(wezly[0]);

// dzieci elementy
let wezly = rodzic.children;
console.log(wezly);

let pierwszeDziecko = rodzic.firstElementChild;
console.log(pierwszeDziecko);

let ostatnieDziecko = rodzic.lastElementChild;
console.log(ostatnieDziecko);

// wyszukiwanie rodzenstwa
let linkPrev = document.getElementById('sibling').previousElementSibling;
let linkNext = document.getElementById('sibling').nextElementSibling;

let linkPrevNode = document.getElementById('sibling').previousSibling;

console.log(linkPrev);
console.log(linkNext);