const express = require ('express') // dudas?
const app = express()
const port = 3000 // localhost:3001

app.get('/', (req, res) => {
    res.send("Hola Mundo")
})

app.listen(port, () =>{
    console.log("Server listo")
})

app.get('/launchx', (req, res) => {
    res.send('Bievenidos a launchx')
})

app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})

//Query pads
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})