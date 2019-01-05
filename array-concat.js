// const arrayConcat = () => {
//     var data = ["Jakarta", "Bandung", "Surabaya", "Semarang"]
//     var kab = ["Banjarnegara", "Wonosobo", "Tegal", "Banyumas"]

//     var hasil = data.concat(kab)
//     return hasil
// }
// console.log(arrayConcat())



// const arrayNegara = () => {
//     var negara = ["Indonesia", "Jepang", "China", "Perancis", "Thailand"]

//     var ibukoneg = ["Jakarta", "Tokyo", "Beijing", "Paris", "Bangkok"]

//     var union = negara.concat(ibukoneg);
//     return union;
// }

// console.log(arrayNegara())


const arrayNegara = () => {
    var negara = ["Indonesia", "Jepang", "China", "Perancis", "Thailand"]

    var ibukoneg = ["Jakarta", "Tokyo", "Beijing", "Paris", "Bangkok"]

    var union = negara.concat(ibukoneg);
    var jum = union.length;

    for (let jum = 5; jum < union.length; jum++) {
        console.log(union[jum])


    }

}

arrayNegara()

