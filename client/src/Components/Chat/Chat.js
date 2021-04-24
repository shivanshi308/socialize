import React,{useState, useEffect} from 'react'
import queryString from 'query-string';
const io= require("socket.io-client")

let socket;

export const Chat =({location})=>{

    const ENDPOINT= "http://localhost:5000"
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
  
    useEffect(()=>{
        socket=io.connect(ENDPOINT, {reconnect:true})
        // socket.on('connect',function(data){
        //     socket.emit('join',"event emitted from client!!!!!")
        // })

        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setRoom(room);
        setName(name)

        socket.emit('join', { name, room }, (error) => {
            if(error) {
                alert(error);
            }
        });
    },[ENDPOINT])

    return (
       <div className='App'>
           <h1>Home pagee!</h1>
       </div>
      );

}