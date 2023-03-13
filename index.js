const levelCharacter = 10

// kalau level lebih dari 10, maka boleh lanjut babak selanjutnya
if (levelCharacter) {
    // code yang di bawah/di dalam sini akan jalan/run saat kondisinya TRUE
    console.log("lanjut babak selanjutnya")
} else {
    // code yang di bawah/di dalam sini akan jalan/run saat kondisinya FALSE
    console.log("latihan lagi di babal ini")
}

let student = {
    nama: "Wira",
    gender: "male"
}

// else if statement
// apakah student itu male?
if (student.gender === "male") {
    console.log("ya dia male")
} else if (student.gender === "female") {
    console.log("dia female")
} else {
    console.log("tidak diketahui")
}

