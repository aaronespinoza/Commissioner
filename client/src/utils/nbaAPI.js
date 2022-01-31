import axios from 'axios';

const search = async (query) =>
  axios.get(`https://api-nba-v1.p.rapidapi.com/teams/nickName/${query}`, {
    headers: {
        'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
        'x-rapidapi-key': '3ff7a83826mshb8cf8701595635ap146368jsn80964166a686',
    }
   });

export default { search };