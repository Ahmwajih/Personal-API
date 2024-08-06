const crypto = require('crypto')


const keyPass = process.env.KEY_PASS

const loopCount = 10_000

const keyLength = 64

const encType = 'sha512'


module.exports =(pwd) => {
    const key = crypto.pbkdf2Sync(pwd, keyPass, loopCount, keyLength, encType)
    return key.toString('hex')
}