const { getInitials, average, createSlug, createSlugSnack4 } = require("./test-vari.js")







// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."


test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Marco Rossi")).toBe("M.R.")
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



// 🏆 Snack 4
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione createSlug sostituisce gli spazi con -."


// 📌 Esempi:

// createSlug("Questo è un test") → "questo-e-un-test"

test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlugSnack4("Questo e un test")).toBe("questo-e-un-test")
})


// 🏆 Snack 5
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."


function isPalindrome(str) {
    const reverseStr = str.split("").reverse().join("");
    return reverseStr === str;
   

   
}


// 📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("anna")).toBeTruthy()
    expect(isPalindrome("ciao")).toBeFalsy()
    expect(isPalindrome("osso")).toBeTruthy()
})


// 🏆 Snack 6
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."







// 🏆 Snack 7
// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.

// Creare un test che verifichi le seguenti descrizioni:

// 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"


// Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).

