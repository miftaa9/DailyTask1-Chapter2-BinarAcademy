// while loops = salah satu cara untuk kita melakukan iteration
// while (condition)
// kondisi print angka 1 - 100
let number = 1
while(number <= 100) {
    // code yg di dalam sini, akan trs jalan selama itu kondisi yg diatas tidak terpenuhi/ TRUE
    console.log(number)
    number += 1
}

// kondisi print angka 1 - 100 tapi angka perkalian 5
number = 1
while(number <= 100) {
    // code yg di dalam sini, akan trs jalan selama itu kondisi yg diatas tidak terpenuhi/ TRUE
    if (number % 5 === 0) {
        console.log(number)    
    }
    number += 1
}

// for loops
// for(variable; condition; update)
// i++ === i + 1, i-- === i-1
for (let i = 0; i < 100; i++) {
    // print tiap 
    console.log(i)
    if (i % 3 === 0) {
        console.log("ini kelipatan 3")
    } else {
        console.log(i)
    }
}

// 1) print person yang suka buah apple dan warna mata nya biru
[
    '{{repeat(5, 7)}}',
    {
      _id: '{{objectId()}}',
      isActive: '{{bool()}}',
      age: '{{integer(20, 40)}}',
      eyeColor: '{{random("blue", "brown", "green")}}',
      name: '{{firstName()}} {{surname()}}',
      gender: '{{gender()}}',
      favoriteFruit: function (tags) {
        var fruits = ['apple', 'banana', 'strawberry'];
        return fruits[tags.integer(0, fruits.length - 1)];
      }
    }
  ]

// 2) print berapa person yang age nya diatas 30
// 3) print person yang isActive true and  gender nya female
// 4) print yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue
// 5) print person yang mengandung huruf W di name nya
// 6) print person isActive false dan gender nya male dan age nya diatas 25
// 7) print person age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana
// 8) print person gender male
// 9) print person eyeColor Blue
// 10) print person age diatas 30