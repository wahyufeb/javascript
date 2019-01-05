// const arrayJoin = () => {
//     var merek = ["Samsung", "Apple", "OPPO", "Xiaomi", "Huawei"]
//     console.log(merek)

//     var hasil = merek.join(", ")
// }
// console.log(arrayJoin())


const arrayJoin = () => {
    var merek = ["Samsung", "Apple", "OPPO", "Xiaomi", "Huawei"]

    var hasil = merek.join(" ")

    var isi = hasil.split(" ")
    return isi;
}
console.log(arrayJoin())