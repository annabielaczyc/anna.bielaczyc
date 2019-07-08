let wzrostMarcin = 170;
let wzrostMichal = 180;

if(wzrostMarcin > wzrostMichal) {
    console.log('123');
} else if (wzrostMarcin == wzrostMichal) {
    console.log('Michał jest wyższy');
} else {
    console.log('zaden z warunkow nie zostal spelniony');
}

let kolor = 'czarny';

switch(kolor) {
    case 'czerwony':
        console.log('wybrales kolor czerwony');
        break;

    case 'zielony':
        console.log('wybrales kolor zielony');
        break;

    default:
        console.log('nie wybrales koloru z listy');
}