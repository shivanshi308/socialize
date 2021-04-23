import React,{useState, useEffect} from 'react'
const io= require("socket.io-client")

let socket;

export const Home =()=>{

    const ENDPOINT= "http://localhost:5000"

    
    useEffect(()=>{
        socket=io.connect(ENDPOINT, {reconnect:true})
        // socket.on('connect',function(data){
        //     socket.emit('join',"event emitted from client!!!!!")
        // })
    },[ENDPOINT])

    return (
       <div className='App'>
           <h1>Home pagee!</h1>
       </div>
      );

}