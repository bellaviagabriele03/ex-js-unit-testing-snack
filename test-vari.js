function getInitials(name) {
    const nameArray = name.split("");
    return nameArray[0] + nameArray[1]
}
function createSlug(str) {
    return str.toLowerCase()
}


module.exports = {
    getInitials,
    createSlug,
}