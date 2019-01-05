const arrayShift = () => {
    var kota = ["Jakarta", "Bandung", "Yogyakarta", "Malang", "Surabaya"]
    console.log(kota);
    console.log("===========================================")

    // kota = kota.shift()


    var kota2 = kota.shift()
    console.log(kota2)

    return kota
}

console.log(arrayShift())