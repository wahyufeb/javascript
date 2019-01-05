// Bilangan Genap
// const bilGenap = () => {

//     var bilgen = [];
//     for (var i = 1; i < 10; i++) {
//         if (i % 2 === 0) {
//             bilgen.push(i)
//         }

//     }

//     return bilgen;
// }

// console.log(bilGenap())


//Bilangan Ganjil 30
const bilanganGanjil = () => {
    var bilganjil = [];
    for (var bil = 1; bil < 30; bil++) {
        if (bil % 2 === 1) {
            bilganjil.push(bil);
        }

    }
    return bilganjil;
}

console.log(bilanganGanjil())


//Bilangan Genap 30
const bilanganGenap = () => {
    var bilgenap = [];
    for (var bil = 1; bil < 30; bil++) {
        if (bil % 2 === 0) {
            bilgenap.push(bil)
        }

    }

    return bilgenap
}

console.log(bilanganGenap())