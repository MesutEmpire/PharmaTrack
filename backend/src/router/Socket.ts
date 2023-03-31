const socket_io = require('socket.io')

const socket = (server :any)=> {
    const io = socket_io(server)

    io.on('connection',(socket:any)=>{
        console.log(`${socket.id} user Connected`)
    
        socket.on('greetings',(data:any)=>{
            console.log(data)
        })
        socket.emit('received','Hello From Server Received',(response:any)=>{
            console.log(response)
            console.log('Hello From Server Received')
        })
        socket.on('disconnect',()=>{
            console.log(`${socket.id} has disconnected`)
        })
    })
    return io;
}

module.exports = {socket}