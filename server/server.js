const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
require('dotenv').config()
const moment = require('moment')
const navlinks = require('./seeds/articles')
const PORT = process.env.PORT

cors()



app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.get('/articles',(req, res) => {
    res.json(navlinks)
})


app.listen(PORT, () => {
    console.log(`App listens to ${PORT}`)
})

