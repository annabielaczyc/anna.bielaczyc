// funkcja to nazwany blok kodu, ktory wykonuje zadane instrukcje, po wywolaniu
// definicja funkcji za pomoca slowa kluczowego "function"
function zalogujDoKonsoli() {
    console.log('podpiete');
}

// wywolanie funkcji
zalogujDoKonsoli();

// funkcja parametrowa
function odejmowanie(par1, par2) {
    // console.log(par1 - par2);
    return par1 - par2;
}

// function dodawanie(par1, par2) {
//     let wynik = par1 + par2;
//     return wynik;
// }

const dodawanie = (par1, par2) => {
    let wynik = par1 + par2;
    return wynik;
}

let odjac = odejmowanie(5, 3);

let dodano = dodawanie(odjac, 4);

console.log(odjac);
console.log(dodano);

// function mnozenie(par1, par2, par3) {
//     let wynik = par1 * par2 * par3;
//     return wynik;
// }

// let wynik2 = mnozenie(1, 2, 12);
// console.log(wynik2);

// funkcje strzalkowe
const zaloguj = () => {
    console.log('123');
}

zaloguj();


