const express = require('express')
require("dotenv").config()

let dbConnect = require("./dbConnect");
const app = express()


app.use(express.json())

app.get("/", (req, res) => {
    res.json({message: "Welcome to my Module 9, Lab 2: MongoDB Blog Application"})
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}.`)
})