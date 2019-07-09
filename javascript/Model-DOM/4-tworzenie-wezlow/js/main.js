// tworzenie wezlow
let button = document.createElement('button');
// console.log(button);

let text = document.createTextNode('click me');
// console.log(text);

let attribute = document.createAttribute('class');
// console.log(attribute);

let rodzic = document.getElementById('parFirst');
rodzic.appendChild(button);
button.appendChild(text);
attribute.value = 'btn';
button.setAttributeNode(attribute);
// console.log(attribute);

// stworz nowy element "p", dodaj do niego text. Za pomoca metody
// "setAttribute", dodaj mu klase z wartoscia "paragraph", a nastepnie
// osadz go na koncu BODY
let paragraph = document.createElement('p');
// console.log(paragraph);

let textInside = document.createTextNode('12345');
// console.log(textInside);

paragraph.appendChild(textInside);

paragraph.setAttribute('class', 'paragraph');
// console.log(paragraph);

let rodzic2 = document.getElementsByTagName('body')[0];
// console.log(rodzic2);
// document.body.appendChild(paragraph);
rodzic2.appendChild(paragraph);

// usuwanie elementow
paragraph.removeAttribute('class');
document.body.removeChild(paragraph);