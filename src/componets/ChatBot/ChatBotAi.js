import React, { useEffect, useState } from 'react';
import socketIOClient from "socket.io-client";
import axios from 'axios';

const ENDPOINT = "http://localhost:4000";

function ChatBotAi() {
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState("");
    const [message, setMessage] = useState("");
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = socketIOClient(ENDPOINT);
        setSocket(newSocket);
        
        axios.get(`${ENDPOINT}/messages`)
            .then(response => setMessages(response.data));

        newSocket.on('message', (data) => {
            setMessages((messages) => [...messages, data]);
        });

        return () => newSocket.close();
    }, []);

    const sendMessage = () => {
        if (socket && message) {
            const newMessage = { user, message };
            socket.emit('sendMessage', newMessage);
            setMessage("");
        }
    };

    return (
        <div className="App">
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
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
                        <strong>{msg.user}:</strong> {msg.message}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChatBotAi;
