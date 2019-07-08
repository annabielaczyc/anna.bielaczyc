// tablice
let names = ['Ania', 'Rafal', 'Adam'];

// wyciaganie z tablicy - nazwaTablicy[indeks]
console.log(names[1]);
console.log(names);

// dodawanie za pomoca indeksu
names[3] = 'Marcin';
names[4] = 'Anna';
console.log(names);

// dodawanie na koniec tablicy za pomoca metody .push()
names.push('Dorota', 'Vasia');
console.log(names);

// metoda .pop() usuwa element z konca tablicy i go zwraca
console.log(names.pop());
console.log(names);

// metoda .unshift() dodaje element/y na poczatek tablicy
names.unshift('Pawel');
console.log(names);

// metoda .shift() usuwa element z poczatku tablicy i go zwraca
names.shift();
console.log(names);

// dlugosc tablicy -> length
console.log('Dlugosc tablicy to: ' + names.length);

// laczenie elemenetow tablicy w string -> metoda .join()
console.log(names.join(' '));

// metoda .reverse() czyta tablice od konca do poczatku
console.log(names.reverse());
console.log(names.reverse());

// metoda .sort() sortuje tablice, domyslne jest sortowanie alfabetyczne
console.log(names.sort());

function sortNumber(a, b) {
    return a - b;
}

let liczby = [0, 10, 2, -1, 01];
console.log(liczby.sort(sortNumber));

