import axios from "axios"

const baseUrl ="https://bayut.p.rapidapi.com"

//headers: {
   // 'x-rapidapi-host': 'bayut.p.rapidapi.com',
   // 'x-rapidapi-key': 'e0db8e15edmshd2ee394bb7399e8p11f48fjsn41b4ece282b9'
 // }

 export const fetchApi = async (url) => {
     const repsonse = await axios.get ((url),{
         headers: {
   'x-rapidapi-host': 'bayut.p.rapidapi.com',
   'x-rapidapi-key': 'e0db8e15edmshd2ee394bb7399e8p11f48fjsn41b4ece282b9'
  }

     }
     
     )

 }