function getInitials(name) {
    const nameArray = name.split("");
    return nameArray[0] + nameArray[1]
}


module.exports = {
    getInitials,
}