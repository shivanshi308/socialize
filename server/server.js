
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app= express()
const router = express.Router()

const PORT= process.env.PORT || 5000
app.use(cors())
const http= require('http').createServer(app)
app.use(router)

const io= require('socket.io')(http,{
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  })

router.get('/', (req, res) => {
    res.send('Server up and running')
})

io.on('connection', function(socket){

    console.log("New client connected");
    socket.on('disconnect',()=>{
        console.log('user disconnected')
    })
    // socket.on('event 1',()=>{
    //     console.log('event received from client')
    // })
})

http.listen(PORT, () => console.log(`Server now running!!!`));