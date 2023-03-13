// object
let student = {
    nama: "Wira",
    gender: "male",
    rank: 3
}

// array of object
let students = [
    {
        nama: "Wira",
        gender: "male"
    },
    {
        nama: "Helmy",
        gender: "male"
    },
    {
        nama: "Oryza",
        gender: "female"
    },
    {
        nama: "Mifta",
        gender: "female"
    }
]

// switch statement
// print nama2 student yang gendernya cewe
// student = objeknya, rank = key dari objek
switch(student.rank) {
    case 1:
        console.log("Dia mendapatkan medali emas")
        console.log('ini jalan karena sblm break')
        break;
        console.log('ini ga akan jalan karena sesudah break')
    case 2:
        console.log("Dia mendapatkan medali silver")
        break;
    case 3:
        console.log("Dia mendapatkan medali perak")
        break;
    default:
        console.log("DIa tidak dapat medali apa2")
}