import axios from 'axios';

const baseUrl = process.env.PUBLIC_URL;

export async function search(keyword){
    return axios.get(`${baseUrl}/videos/${keyword ? "search" : "popular"}.json`)
      .then((res) => {
        console.log(res);
        return res.data.items})
  };