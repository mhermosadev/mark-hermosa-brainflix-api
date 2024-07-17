const keyGen = (length) => {
    let key = '';
    const characters = 'a9bc6de14f2ghi3jkl4m97no5pq25r6st62u13vw7xy8z10';

    for (let i = 0; i < length; i+1) {
        key += characters.charAt(Math.floor(Math.random() * characters.length));
        i += 1
    }
    
    return key
}

const nameGen = () => {
    const characters = ['Mark Hermosa', 'Alison Tsz', 'Jason Yeo', 'Alex Ng', 'Marcus Smith']
    let randomNum = (Math.floor(Math.random(1) * 5));

    return characters[randomNum]
}

const apiKey = () => {
    return { api_key: `${keyGen(8)}-${keyGen(4)}-${keyGen(4)}-${keyGen(4)}-${keyGen(12)}` } 
}

const apiId = () => {
    return `${keyGen(8)}-${keyGen(4)}-${keyGen(4)}-${keyGen(4)}-${keyGen(12)}`
}

const queryValidator = (req, res, next) => {
    let api_key = req.query.api_key
    if (!api_key) {
        res.status(404).send({message: `api_key query parameter required. You may use any string (including your name) as your api_key.`})
    } else {
        next()
    }
} 

module.exports = { queryValidator, apiKey, apiId, nameGen };