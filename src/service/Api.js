import axios from 'axios'



const Api = async(text) => {
  return await axios.get(`https://www.breakingbadapi.com/api/characters?name=${text}`)
   

}

export default Api
