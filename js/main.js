
const animais = [
    {   
        nome: 'rex',
        tipo:'dog',
        age:10,
        peso:1
    },
    {   
        nome: 'miau',
        tipo:'gato',
        age:2,
        peso:2
    },
    {   
        nome: 'glup',
        tipo:'peixe',
        age:1,
        peso:3
    }
]

const idadeTotal = animais.reduce((total, animal) =>{
            return total = total + animal.age;
},0)

/*
const nomePets = animais.map((animal)=>{
    return animal.nome;
})

const menorCinco = (n) => {
    return n<5
}

const newPets = animais.filter((animal)=>menorCinco(animal.age));
*/
console.log(idadeTotal);
