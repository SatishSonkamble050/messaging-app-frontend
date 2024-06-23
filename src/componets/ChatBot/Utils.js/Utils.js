import axios from 'axios';
import { logicCheckService } from '../services/userServices';
export const getUserDetailes = async()=>{
    const token  = localStorage.getItem('token')
   const user = await logicCheckService(token)
   return user
}