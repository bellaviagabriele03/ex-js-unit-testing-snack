function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" ");
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`

}

function average(nums) {
    const somma = nums.reduce((acc, n) => acc + n, 0)
    return somma / nums.length
}

function createSlug(str) {
    return str.toLowerCase()
}

function createSlugSnack4(str) {
    const arr = str.split(" ")
    return arr.join("-").toLowerCase()
}

module.exports = {
    getInitials,
    average,
    createSlug,
    createSlugSnack4

}