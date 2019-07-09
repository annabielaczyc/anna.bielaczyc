// wyszukiwanie po id
let parFirst = document.getElementById('parFirst');
console.log(parFirst);

// wyszukiwanie po class
let linki = document.getElementsByClassName('link');
console.log(linki);
console.log(linki[0]);

// wyszukiwanie po tagu/znaczniku
let paragrafy = document.getElementsByTagName('p');
console.log(paragrafy);

// wyszukiwanie za pomoca selektora css
let links = document.querySelectorAll('#parSecond .link');
console.log(links);

let link = document.querySelector('#parSecond .link');
console.log(link);