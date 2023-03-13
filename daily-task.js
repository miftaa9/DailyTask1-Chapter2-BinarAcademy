const person = [{
        // data ke-1
        "_id": "640ed5d511e1d3eccf4bf046",
        "isActive": true,
        "age": 31,
        "eyeColor": "blue",
        "name": "Mayer Schultz",
        "gender": "male",
        "favoriteFruit": "apple"
    },
    {
        // data ke-2
        "_id": "640ed5d5e22a3f2acbdc236b",
        "isActive": false,
        "age": 25,
        "eyeColor": "brown",
        "name": "Pam Long",
        "gender": "female",
        "favoriteFruit": "banana"
    },
    {
        // data ke-3
        "_id": "640ed5d569b2d9d47a397abf",
        "isActive": false,
        "age": 22,
        "eyeColor": "blue",
        "name": "Pierce Gillespie",
        "gender": "male",
        "favoriteFruit": "banana"
    },
    {
        // data ke-4
        "_id": "640ed5d5efe545a21a2a8e4b",
        "isActive": true,
        "age": 25,
        "eyeColor": "blue",
        "name": "Terry Santana",
        "gender": "female",
        "favoriteFruit": "banana"
    },
    {
        // data ke-5
        "_id": "640ed5d57960450fe7d66218",
        "isActive": false,
        "age": 38,
        "eyeColor": "green",
        "name": "Mcbride Mcdonald",
        "gender": "male",
        "favoriteFruit": "banana"
    },
    {
        // data ke-6
        "_id": "640ed5d5a7c94ca53de96cb3",
        "isActive": false,
        "age": 36,
        "eyeColor": "blue",
        "name": "Blankenship Mullins",
        "gender": "male",
        "favoriteFruit": "apple"
    },
    {
        // data ke-7
        "_id": "640ed5d52a6f7f0cdf9772ef",
        "isActive": true,
        "age": 28,
        "eyeColor": "green",
        "name": "Rita Wallace",
        "gender": "female",
        "favoriteFruit": "strawberry"
    },
    {
        // data ke-8
        "_id": "640ed648df7566c2c9af1279",
        "isActive": true,
        "age": 35,
        "eyeColor": "blue",
        "name": "Roxanne Delgado",
        "gender": "female",
        "favoriteFruit": "strawberry"
    },
    {
        // data ke-9
        "_id": "640ed6487d0d8f92076aa935",
        "isActive": true,
        "age": 40,
        "eyeColor": "brown",
        "name": "Rosanna Guerrero",
        "gender": "female",
        "favoriteFruit": "banana"
    },
    {
        // data ke-10
        "_id": "640ef31635c89065731ee72c",
        "isActive": false,
        "age": 24,
        "eyeColor": "brown",
        "name": "Howell Heath",
        "gender": "male",
        "favoriteFruit": "banana"
    },
    {
        // data ke-11
        "_id": "640ed6485805d8c30b5c8275",
        "isActive": true,
        "age": 28,
        "eyeColor": "blue",
        "name": "Evans Mayer",
        "gender": "male",
        "favoriteFruit": "strawberry"
    },
    {
        // data ke-12
        "_id": "640ed6480c7811f006e9a118",
        "isActive": false,
        "age": 23,
        "eyeColor": "brown",
        "name": "Fernandez Shaffer",
        "gender": "male",
        "favoriteFruit": "strawberry"
    },
    {
        // data ke-13
        "_id": "640ed648ea8ef32b75f6cd85",
        "isActive": false,
        "age": 26,
        "eyeColor": "green",
        "name": "Summers Jensen",
        "gender": "male",
        "favoriteFruit": "banana"
    },
    {
        // data ke-14
        "_id": "640ed6483e5abf2994ff96da",
        "isActive": false,
        "age": 29,
        "eyeColor": "green",
        "name": "Viola Cohen",
        "gender": "female",
        "favoriteFruit": "apple"
    }
]

// 1) print person yang suka buah apple dan warna mata nya biru 
console.log('\n[ Data person yang suka buah apple dan warna mata nya biru ]')

for (let i = 0; i < person.length; i++) {
    if (person[i].favoriteFruit === 'apple' && person[i].eyeColor === 'blue') {
        console.log('\nData ke-' + i)
        console.log(person[i])
    }
}

// 2) print BERAPA person yang age nya diatas 30 
console.log('\n[ Data BERAPA person yang age nya diatas 30 ]')

let array = []

for (let i = 0; i < person.length; i++) {
    if (person[i].age > 30) {
        array.push(person[i])
    }
}

console.log('Total datanya ada ' + array.length)
console.log(array)

// 3) print person yang isActive true and gender nya female 
console.log('\n[ Data person yang isActive true and gender nya female ]')

for (let i = 0; i < person.length; i++) {
    if (person[i].isActive === true && person[i].gender === 'female') {
        console.log('\nData ke-' + i)
        console.log(person[i])
    }
}

// 4) print yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue 
console.log('\n[ Data person yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue ]')

for (let i = 0; i < person.length; i++) {
    if (person[i].age > 30 || person[i].age < 25 && person[i].eyeColor === 'blue') {
        console.log('\nData ke-' + i)
        console.log(person[i])
    }
}

// 5) print person yang mengandung huruf W di name nya 
console.log('\n[ Data person yang mengandung huruf W di name nya ]')

for (let i = 0; i < person.length; i++) {
    let array = []
    array.push(person[i].name)

    for (let a = 0; a < array[0].length; a++) {
        if (array[0][a] === "w" || array[0][a] === "W") {
            console.log('\nData ke-' + i)
            console.log(person[i])
        }
    }
}

// 6) print person isActive false dan gender nya male dan age nya diatas 25 
console.log('\n[ Data person isActive false dan gender nya male dan age nya diatas 25 ]')

for (let i = 0; i < person.length; i++) {
    if (person[i].isActive === false && person[i].gender === 'male' && person[i].age > 25) {
        console.log('\nData ke-' + i)
        console.log(person[i])
    }
}

// 7) print person age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana
console.log('\n[ Data person age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana ]')

for (let i = 0; i < person.length; i++) {
    if (person[i].age < 30 || person[i].eyeColor === 'brown' && person[i].favoriteFruit === 'banana') {
        console.log('\nData ke-' + i)
        console.log(person[i])
    }
}

// 8) print person gender male 
console.log('\n[ Data person gender male ]')

for (let i = 0; i < person.length; i++) {
    if (person[i].gender === 'male') {
        console.log('\nData ke-' + i)
        console.log(person[i])
    }
}

// 9) print person eyeColor Blue 
console.log('\n[ Data person eyeColor Blue ]')

for (let i = 0; i < person.length; i++) {
    if (person[i].eyeColor === 'blue') {
        console.log('\nData ke-' + i)
        console.log(person[i])
    }
}

// 10) print person age diatas 30
console.log('\n[ Data person age diatas 30 ]')

for (let i = 0; i < person.length; i++) {
    if (person[i].age > 30) {
        console.log('\nData ke-' + i)
        console.log(person[i])
    }
}