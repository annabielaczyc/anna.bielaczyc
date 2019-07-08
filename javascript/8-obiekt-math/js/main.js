// Napisz funkcję, która jako parametr przyjmuje promień (r) koła, a następnie
// liczy jego pole ze wzoru pole = pi * r kwadrat
const poleKola = (r) => {
    return Math.PI * Math.pow(r, 2);
}

let wynik = poleKola(10);
console.log(wynik);