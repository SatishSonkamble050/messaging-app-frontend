import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { getUserDetailes } from './Utils.js/Utils';
const ENDPOINT = "http://localhost:4000";

function ChatBotHomePage() {
const [usersData, setUsersData] = useState([])
const navigate = useNavigate()
const [sender, setSender] = useState('')

const getAllUser = async()=>{
    const users = await axios.get(`${ENDPOINT}/user/all`)
    console.log("USER DATA : ", users)
    setUsersData(users.data.data)
}
useEffect(()=>{
    getAllUser()

    const getUser = async()=>{
      const user = await getUserDetailes()
      setSender(user.userName)
    }
    getUser()
},[])

const viewSingleContactHandler = (event) =>{
    const user = event.currentTarget.getAttribute('user-data')
    console.log("USER DATA : ", JSON.parse(user))
    const userinfo = JSON.parse(user)

    navigate('/chat', {state : userinfo})

}

  return (

    <>
      <div className="mainContainer">
        <div className="header">
          {sender}
        </div>
        <div className='userContainer'>
            {
                usersData?.map((user, index)=>(
                    <div className='userRow' user-data = {JSON.stringify(user)} onClick={viewSingleContactHandler}>
                        <img src="https://i.ibb.co/12dTXYp/Ellipse-1.png" alt="Ellipse-1" border="0" />
                        <div className='userName'>{user.userName}</div>
                    </div>
                ))
            }
        </div>
       
      </div>
    </>

  )
}

export default ChatBotHomePage