const ustawTlo = () => {
    document.getElementsByTagName('p')[0].style.backgroundColor = 'red';
    document.getElementsByTagName('p')[1].style.backgroundColor = 'yellow';
}

document.getElementsByTagName('button')[0].addEventListener('click', ustawTlo);

// console.log(document.getElementsByTagName('p')[0]);
// console.log(document.getElementsByTagName('p')[1]);