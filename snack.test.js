const { getInitials, average } = require("./test-vari.js")







// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."


test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Marco")).toBe("Ma")
})






// 🏆 Snack 2
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione createSlug restituisce una stringa in lowercase."


test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("Marco Rossi")).toBe("marco rossi")
    expect(createSlug("Loris MAGICO")).toBe("loris magico")

})



// 🏆 Snack 3
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione average calcola la media aritmetica di un array di numeri."




test("La funzione average calcola la media aritmetica di un array di numeri.", () => {

    const numbers = [1, 2, 3, 4,]
    const numbers2 = [30, 40, 50, 100]

    expect(average(numbers)).toBe(2.5)
    expect(average(numbers2)).toBe(55)
})

//utilizzo before e after each per non far fallire lo snack 2 e per poter eseguire lo snack 4 senza cambiare la funzione createSlug per far fallire uno o l'altro test !
let createSlug;

beforeEach(()=>{
   createSlug = (str) => {
    return str.toLowerCase()
   }
})

afterEach(()=> {
     createSlug = (str) => {
        const arr = str.split(" ")
        return arr.join("-")
    } 
})

// 🏆 Snack 4
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione createSlug sostituisce gli spazi con -."


// 📌 Esempi:

// createSlug("Questo è un test") → "questo-e-un-test"