const express = require('express')
const cors = require('cors')
const router = require('express').Router()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

router.post('/login', (req, res) => {
    console.log("req", req.body);
    const { username, password } = req.body
    if (username === 'admin' && password === '1234') {
        return res.status(200).json({ success: 'successfully logged in!' })
    }
    return res.status(422).json({ errors: [{ msg: 'invalid credentials!' }] })
})

app.use(router)

app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}`)
})
