// obiekty
// notacja es5
// var person = {
//     name: 'Marcin',
//     height: 170,
//     print: function() {
//         console.log(this.name);
//     }
// }

// notacja es6
let person = {
    'first name': 'Marcin',
    height: 170,
    print() {
        console.log(this.name);
    }
}

// dostep do pola obiektu, jezeli nazwa jest jednoczlonowa, uzyskujemy przez
// nazwa_obiektu.nazwa_pola. Jezeli nazwa jest dwuczlonowa (zawiera spacje), dostep uzyskujemy przez
// nazwa_obiektu['nazwa pola']
console.log(person['first name']);
// person.print();

person.weight = 65;
console.log(person.weight);

// klasy
// definicja klasy
class Person {
    // constructor - slowo kluczowe
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    printInfo() {
        console.log( `Imię: ${this.name}, Nazwisko ${this.surname}` );
    }


}

// jezeli mamy zdefiniowana klase, obiekty tworzymy przez slowo kluczowe 'new'
let marcin = new Person('Marcin', 'G', 180);
marcin.printInfo();
console.log(marcin.height);

let michal = new Person('Michal', 'K', 170);
michal.printInfo();
console.log(michal.height);