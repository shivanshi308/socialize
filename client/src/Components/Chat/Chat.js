import React,{useState, useEffect} from 'react'
import queryString from 'query-string';
import {InputForm} from '../InputForm/InputForm';

const io= require("socket.io-client")



let socket;

export const Chat =({location})=>{

    const ENDPOINT= "http://localhost:5000"
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
  
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
    },[ENDPOINT,location.search])

    useEffect(() => {
        socket.on('message', message => {
          setMessages(msgs => [ ...msgs, message ]);
        });

    }, []);


    const sendMessage = (event) => {
        event.preventDefault();
    
        if(message) {
          socket.emit('sendMessage', message, () => setMessage(''));
        }
    }



    return (
        <div className="outerContainer">
            <div className="container">
                <h1>Chat screen</h1>
                <InputForm message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
      );

}