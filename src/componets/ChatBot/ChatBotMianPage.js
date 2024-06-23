import React, { useEffect, useState } from "react";
import "./chatBot.css";
import { IoIosSend } from "react-icons/io";
import socketIOClient from 'socket.io-client';
import { useLocation } from "react-router-dom";
import { getUserDetailes } from "./Utils.js/Utils";
import { getMessages } from "./services/userServices";
import axios from "axios";



function ChatBotMianPage() {
  const meaasges = [
    {
      sender: "you",
      msg: "HI....",
    },
    {
      sender: "other",
      msg: "Hello....",
    },
    {
      sender: "you",
      msg: "H R U....",
    },
    {
      sender: "you",
      msg: "W R U....",
    },
    {
      sender: "other",
      msg: "NO....",
    },
    {
      sender: "you",
      msg: "Demo.... hfif fhfiif fhfuiif fhhfiif  fhfiiif fjfjjjf fjfjkkf fkkkf fkkkkf",
    },
    {
      sender: "you",
      msg: "H R U....",
    },
    {
      sender: "you",
      msg: "W R U....",
    },
    {
      sender: "other",
      msg: "NO....",
    },
    {
      sender: "you",
      msg: "Demo.... hfif fhfiif fhfuiif fhhfiif  fhfiiif fjfjjjf fjfjkkf fkkkf fkkkkf",
    },
    {
      sender: "you",
      msg: "H R U....",
    },
    {
      sender: "you",
      msg: "W R U....",
    },
    {
      sender: "other",
      msg: "NO....",
    },
    {
      sender: "you",
      msg: "Demo.... hfif fhfiif fhfuiif fhhfiif  fhfiiif fjfjjjf fjfjkkf fkkkf fkkkkf",
    },
  ];

  // const socket = socketIOClient('http://localhost:4000');
  //console.log("SOCLKET : ", socket)
  const [socket, setSocket] = useState(null);
  const [msgData, setMsgData] = useState(meaasges);
  const [msgInput, setMsgInput] = useState("");
  const location = useLocation()
  const reciverInfo = location.state
  const [sender, setSender] = useState('')
  const [receiver, setReceiver] = useState(reciverInfo.userName)
  const ENDPOINT = "http://localhost:4000";

  
  

  useEffect(() => {

    const getUserHandler = async()=>{
      const data = await getUserDetailes()
      console.log("IN UI MAIN PAGE :", data)
      setSender(data.userName)
    }
    getUserHandler()   
  },[])

  useEffect(()=>{
    const data = {
      sender : sender,
      receiver : receiver
  }

  const getMessagesHandle = async()=>{
    const massage =  await getMessages(data)
    console.log("ALL MESSAGES : ", massage)
    setMsgData(massage)
  }
  getMessagesHandle()
   
  },[sender, receiver])

  // useEffect(() => {
  //   socket.on('message', (data) => {
  //     setMsgData([...msgData, data]);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [msgData]);

  // const sendMessage = () => {
  //   socket.emit('message', msgInput);
  // };

  useEffect(() => {
    if (sender) {
        const token = localStorage.getItem('token');
        const newSocket = socketIOClient(ENDPOINT, {
            query: { token }
        });
        setSocket(newSocket);

  

        newSocket.on('connect', () => {
            newSocket.emit('join', { userName: sender });
        });

        newSocket.on('message', (data) => {
            setMsgData((messages) => [...messages, data]);
        });

        return () => newSocket.close();
    }
}, [sender]);

// const sendMessage = () => {
//     if (socket && message && receiver) {
//         socket.emit('sendMessage', { receiver, message });
//         setMessage("");
//     }
// };

  const sendMessage = () => {
    let message = msgInput
    if (socket && message && receiver) {
        socket.emit('sendMessage', { receiver, message });
        setMsgInput("");
    }
};


  return (
    <>
      <div className="mainContainer">
        <div className="header">
          {reciverInfo.userName}
        </div>
        <div className="chatMessages">
          {msgData.map((msg, index) => (
            <>
              {msg.sender === sender ? (
                <div className="youMain">
                  <div className="msgYou">{msg.message}</div>
                </div>
              ) : (
                <div className="msgOther">{msg.message}</div>
              )}
            </>
          ))}
        </div>
        <div className="textArea">
          <textarea
            type="textarea"
            className="textFiled"
            placeholder="Enter your message...."
            value={msgInput}
            onChange={(e) => setMsgInput(e.target.value)}
          />
          <span className="sendIcon">
            <IoIosSend onClick={() => sendMessage()} />
          </span>
        </div>
      </div>
    </>
  );
}

export default ChatBotMianPage;
