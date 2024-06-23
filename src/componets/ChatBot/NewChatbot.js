import React, { useEffect, useState } from 'react';
import socketIOClient from "socket.io-client";
import axios from 'axios';
// import {jwt_decode} from 'jwt-decode';
// const { default: jwt_decode } = require("jwt-decode");
import {jwtDecode} from 'jwt-decode'

const ENDPOINT = "http://localhost:4000";

function NewChatbot() {
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState("");
    const [message, setMessage] = useState("");
    const [receiver, setReceiver] = useState("");
    const [socket, setSocket] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

   

   const tokenHandler = ()=>{
    const token = localStorage.getItem('token')
   if(token){
    setLoggedIn(true)
   }
   }

   useEffect(()=>{
    tokenHandler()
   },[])



    



    useEffect(() => {
        if (loggedIn) {
            const token = localStorage.getItem('token');
            const newSocket = socketIOClient(ENDPOINT, {
                query: { token }
            });
            setSocket(newSocket);

            const data = {
                sender : user,
                receiver : "ram123"
            }
    
            axios.post(`${ENDPOINT}/messages`, data, {
                headers: { 'x-access-token': token }
            })  
            .then(response => setMessages(response.data));
    
            newSocket.on('connect', () => {
                newSocket.emit('join', { userName: user });
            });
    
            newSocket.on('message', (data) => {
                setMessages((messages) => [...messages, data]);
            });
    
            return () => newSocket.close();
        }
    }, [loggedIn]);
    
    const sendMessage = () => {
        if (socket && message && receiver) {
            socket.emit('sendMessage', { receiver, message });
            setMessage("");
        }
    };


    const register = async () => {
        try {
            await axios.post(`${ENDPOINT}/user/user-register`, { userName, password });
            alert('User registered');
        } catch (err) {
            alert('Username already exists');
        }
    };

    const login = async () => {
        try {
            const response = await axios.post(`${ENDPOINT}/user/user-login`, { userName, password });
            localStorage.setItem('token', response.data.token);
            setLoggedIn(true);
            setUser(userName);
        } catch (err) {
            alert('Invalid credentials');
        }
    };
    
    // useEffect(()=>{ console.log("LOGGEDIN : ", loggedIn)},[loggedIn])

    if (!loggedIn) {
        return (
            <div>
                <h2>Login or Register</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={register}>Register</button>
                <button onClick={login}>Login</button>
            </div>
        );
    }

    return (
        <div className="App">
            <div>
                <h2>Welcome, {user}</h2>
                <input
                    type="text"
                    placeholder="Receiver"
                    value={receiver}
                    onChange={(e) => setReceiver(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.sender} to {msg.receiver}:</strong> {msg.message}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewChatbot;
