// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."
function getInitials(name) {
    const nameArray = name.split("");
    return nameArray[0] + nameArray[1]
}

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Marco")).toBe("Ma")
})