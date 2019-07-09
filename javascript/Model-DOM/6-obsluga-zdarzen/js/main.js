const showText = () => {
    event.preventDefault();
    console.log(event); //odczyta parametry eventu
    console.log('kliknieto');
}

const changeBackground = (event) => {
    if(event.keyCode == '40') {
        document.body.style.backgroundColor = "grey";
    } else {
        document.body.style.backgroundColor = "white";
    }
    console.log(event);
}

document.body.addEventListener('keydown', changeBackground);

let firstLink = document.getElementsByClassName('link')[4];
// firstLink.onclick = showText;

// firstLink.addEventListener('click', function(e) {
//     event.preventDefault();
//     console.log('kliknieto');
// });

firstLink.addEventListener('click', showText);

// firstLink.removeEventListener('click', showText);
let container = document.getElementById('sectionFirst');
container.addEventListener('click', (e) => {
    console.log(e.target);
})