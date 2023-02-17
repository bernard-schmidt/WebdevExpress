const express = require("express")
const app = express()

// use ejs as view engine
app.set("view engine", "ejs")

console.log("H")

app.get('/', (req, res) => {
    // to console
    console.log('Here')
    // to browser and browser-console(inspect)
    // res.status(500).send('Hi')
    // res.status(500).json({message: "Error"})
    // res.download("server.js")
    // render the index.ejs file and send information in {}
    res.render('index', {text: 'World'})
})

// require users.js
const userRouter = require('./routes/users')

// use userRouter
app.use('/users', userRouter)

app.listen(process.env.PORT || 3000)