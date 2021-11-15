const express = require("express")
const path = require("path")

const PORT = 4205
const app = express()
app.use(express.json())

app.use(express.static(path.join(__dirname, '../dist/apm-new')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/apm-new', 'index.html'))
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))