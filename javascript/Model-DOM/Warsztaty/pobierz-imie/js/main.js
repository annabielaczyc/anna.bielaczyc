document.getElementById('formularz').addEventListener('submit', (e) => {
    e.preventDefault();

    let fname = document.getElementsByName('fname')[0].value;
    console.log(fname);

    let lname = document.getElementsByName('lname')[0].value;
    console.log(lname);
})