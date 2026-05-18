function getInitials(name) {
    const nameArray = name.split("");
    return nameArray[0] + nameArray[1]
}
function createSlug(str) {
    return str.toLowerCase()
}


function average(nums) {
    const somma = nums.reduce((acc, n)=> acc + n, 0)
    return somma / nums.length
}



module.exports = {
    getInitials,
    createSlug,
    average,
}