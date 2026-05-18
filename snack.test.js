const { getInitials } = require("./test-vari.js")







// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."


test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Marco")).toBe("Ma")
})



// 🏆 Snack 2
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione createSlug restituisce una stringa in lowercase."

function createSlug(str) {
    return str.toLowerCase()
}

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("Marco Rossi")).toBe("marco rossi")
        expect(createSlug("Loris MAGICO")).toBe("loris magico")

})


