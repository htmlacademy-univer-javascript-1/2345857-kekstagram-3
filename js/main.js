const randomIntInRange = (left, right) => {
    min = Math.ceil(left)
    max = Math.floor(right)
    return Math.floor(Math.random() * (right - left) + left)
}

const checkStrLength = (str, maxLength) => str.length <= maxLength