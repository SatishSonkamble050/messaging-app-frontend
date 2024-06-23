import axios from 'axios'
const ENDPOINT = "http://localhost:4000";
const token = localStorage.getItem('token')

export const logicCheckService = async(token) =>{
   const userData = await axios.get(`${ENDPOINT}/user/single`, {
        headers: { 'x-access-token': token }
    })

    console.log("USERDATA : ", userData)
    return userData.data.data
}   

export const getMessages = async(data) =>{
   const rep =  await axios.post(`${ENDPOINT}/messages`, data, {
        headers: { 'x-access-token': token }
    })  

    return rep.data
    
}