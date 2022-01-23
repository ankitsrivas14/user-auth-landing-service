const express = require('express')
const cors = require('cors')
const router = require('express').Router()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const token = 'TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';

router.post('/login', (req, res) => {
    const { username, password } = req.body
    if (username === 'admin' && password === '1234') {
        return res.status(200).json({token, success: 'successfully logged in!' })
    }
    return res.status(422).json({ errors: [{ msg: 'invalid credentials!' }] })
})

router.post('/check-token', (req, res) => {
    const { token: reqToken } = req.body
    if (reqToken === token) {
        return res.status(200).json({ success: 'token is valid!' })
    }
    return res.status(302).json({ errors: [{ msg: 'invalid credentials!' }] })
})

app.use(router)

app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}`)
})
