function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" ");
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`

}

function average(nums) {
    const somma = nums.reduce((acc, n) => acc + n, 0)
    return somma / nums.length
}

function createSlug(str) {
    if (!str) {
        throw new Error("stringa non valida !")
    }
    return str.toLowerCase().replaceAll(" ", "-")
}

function findPostById(array, id) {
    if (!array || !id) {
        throw new Error("non posso eseguire se mi dai dati sbagliati, ask to Loris !")
    }

    return array.find(e => e.id === id)
}

module.exports = {
    getInitials,
    average,
    createSlug,
    findPostById,

}