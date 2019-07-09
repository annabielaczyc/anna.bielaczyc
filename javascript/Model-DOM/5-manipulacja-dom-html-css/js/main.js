let paragraph = document.createElement('p');

// metoda .innerHTML
// paragraph.innerHTML = "<span>lorem ipsum</span>";
// console.log(paragraph);

// metoda .innerText
paragraph.innerText = "<span>lorem ipsum</span>";
console.log(paragraph);

// metoda .outerHTML
// paragraph.outerHTML = '<div class="">12345</div>';
// console.log(paragraph);

document.body.appendChild(paragraph);
paragraph.outerHTML = '<div class="">12345</div>';
console.log(paragraph);

// manipulacja atrybutami
document.getElementById('sibling').href = 'http://google.com';

// mozna dodac atrybut ktory nie istnieje w html
document.getElementById('sibling').title = 'link do google';

let fourthLink = document.getElementsByClassName('link')[3]; //zmienna trzyma czwarty link
fourthLink.className = 'link fourth';
fourthLink.classList.add('red');
fourthLink.classList.remove('fourth');

// style
fourthLink.style.backgroundColor = 'red';