const randomIntInRange = (left, right) => {
    min = Math.ceil(left)
    max = Math.floor(right)
    return Math.floor(Math.random() * (right - left) + left)
}

const checkStrLength = (str, maxLength) => str.length <= maxLength

const createObject = (i, desc) => ({
    id: i,
    url: `photos/${i}.jpg`,
    description: desc,
    likes: randomIntInRange(15, 200),
    comments: randomIntInRange(0, 200)
})

let objArray = []
for (let i = 0; i < 25; i++)
    objArray.push(createObject(i, `Object №${i}`))