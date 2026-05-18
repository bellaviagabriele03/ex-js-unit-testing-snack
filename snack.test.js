const { getInitials, createSlug } = require("./test-vari.js")







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

function average(nums) {
    const somma = nums.reduce((acc, n)=> acc + n, 0)
    return somma / nums.length
}


test("La funzione average calcola la media aritmetica di un array di numeri.", () => {

    const numbers = [1, 2, 3, 4,]
    const numbers2 = [30, 40, 50, 100]

    expect(average(numbers)).toBe(2.5)
    expect(average(numbers2)).toBe(55)
})