const express = require('express')
const router = require ('./routes')
const app = express()
const port = 8000

// app.use(express.json())
app.use('/api', router)

app.listen(port, () => {
    console.log(`Listening: localhost:${port}`)
})