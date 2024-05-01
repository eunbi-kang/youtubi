import axios from "axios";
const baseUrl = process.env.PUBLIC_URL;

export default class FakeYoutubeClient {
  
  async search() {
   return axios.get(`${baseUrl}/videos/search.json`);
  }

  async videos() {
    return axios.get(`${baseUrl}/videos/popular.json`);
  }

  async channels(){
    return axios.get(`${baseUrl}/videos/channel.json`);
  }
}
