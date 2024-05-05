import axios from "axios";
import youtubeKey from "../constant/youtubeKey";

export default class YoutubeClient {
  constructor() {
    /* axios 통신을 할 때, 필요한 기본적인 Setting을 axios.create를 통해 설정해 준 다음
       httpClient에 할당해준다. */
    this.httpClient = axios.create({
        baseURL: 'http://www.googleapis.com/youtube/v3',
        params: { key: process.env.REACT_APP_YOUTUBE_API_KEY3 }
    })
  }

  async search(params) {
    // return this.httpClient.get('search', params)
    // .then((response) => {
    //   console.log(response.status);
    //   if (response.status === 403) {
        
    //   } else if (response.status === 200) {
    //     console.log(response);
    //     console.log("succedd");
    //     // response;
    //   }
    // });
    return this.httpClient.get('search', params);
    //this.httpClient.get('search', params).then(response => response.data);
  }

  async videos(params) {
    return this.httpClient.get('videos', params);
  }

  async channels(params) {
    return this.httpClient.get('channels', params);
  }
}