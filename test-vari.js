function getInitials(name) {
    const nameArray = name.split("");
    return nameArray[0] + nameArray[1]
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