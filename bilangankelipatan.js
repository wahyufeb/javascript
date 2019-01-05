const bilanganKelipatan = () => {
    var data = [];
    for (var bil = 0; bil < 50; bil++) {
        if (bil % 5 === 0) {
            data.push(bil)
        }
    }

    return data
}

console.log(bilanganKelipatan())