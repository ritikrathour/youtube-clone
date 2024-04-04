import axios from "axios";
const BASE_URL = 'https://youtube138.p.rapidapi.com'; 
const options = {
    params: { hl: "en", gl: "us" },
    headers: {
        "X-RapidAPI-Key": "52781361b4msh47d974963f8ae52p1ea049jsne7b5f80766c5",
        "X-RapidAPI-Host": 'youtube138.p.rapidapi.com'
    }
}

export const FetchDataFromAPI = async (url) => {
  try {
      const { data } = await axios.get(`${BASE_URL}/${url}`, options)  
      return data;
  } catch (error) {
    console.log(error, "something was wrong");
  }
}  
