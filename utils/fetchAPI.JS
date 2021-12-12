import axios from "axios"

export const baseUrl = "https://bayut.p.rapidapi.com"



 export const fetchApi = async (url) => {
     const {data} = await axios.get ((url),{
         headers: {
   'x-rapidapi-host': 'bayut.p.rapidapi.com',
   'x-rapidapi-key': 'e0db8e15edmshd2ee394bb7399e8p11f48fjsn41b4ece282b9'
  }

     }
     
     )
     return data;

 }