const express = require ('express') // dudas?
const app = express()
const port = 3000 // localhost:3001

app.get('/', (req, res) => {
    res.send("Hola Mundo")
})

app.listen(port, () =>{
    console.log("Server listo")
})
