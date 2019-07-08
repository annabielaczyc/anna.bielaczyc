// inkr/dekrementacja
let liczba = 4;
console.log(liczba++); // 5
console.log(++liczba);

let liczba2 = 10;

liczba2 += liczba2;
// zapis rownoznaczny
// liczba2 = liczba2 + liczba2;
console.log(liczba2);

let liczba1 = 5;
console.log(liczba1);
liczba1 -= liczba2;
// LS = LS operator PS
console.log(liczba1);

// operatory logiczny I, LUB, NEGACJA
if('2' ==  2 && '3' == 3) {
    console.log('prawda');
}

if('2' ==  2 || '3' === 3) {
    console.log('prawda');
}

let wzrostMarcin = 170;
let wzrostMichal = 180;

// (warunek) ? wartosc_jezeli_prawda : wartosc_jezeli_nieprawda
let wynik = (wzrostMarcin > wzrostMichal) ? "Marcin jest wyzszy" : "Michał jest wyższy";
console.log(wynik);