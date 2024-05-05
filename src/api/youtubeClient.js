import axios from "axios";
import * as youtubeKey from "../constant/youtubeKey";

export default class YoutubeClient {

  constructor() {
    const youtubeApiKey = process.env.REACT_APP_YOUTUBE_API_KEY1;
    const youtubeApiKeyIndex = 1;

    const apiKey = youtubeKey.activeYoutubeKey;
    /* axios 통신을 할 때, 필요한 기본적인 Setting을 axios.create를 통해 설정해 준 다음
       httpClient에 할당해준다. */
    this.httpClient = axios.create({
        baseURL: 'http://www.googleapis.com/youtube/v3',
        params: { key: process.env.REACT_APP_YOUTUBE_API_KEY4 }
    })
  }

  changeYoutubeApiKey() {
    const key = "REACT_APP_YOUTUBE_API_KEY";
    if (this.youtubeApiIndex < 4) {
      this.youtubeApiKeyIndex = this.youtubeApiKeyIndex++;
      key = key + this.youtubeApiIndex;
      // this.youtubeApiKey == process.env[key];
      console.log(this.youtubeApiKey);
    } else if (this.youtubeApiIndex === 4) {
      this.youtubeApiKeyIndex = 1;
    }
  }

  async search(params) {
    // params.params.key = process.env.REACT_APP_YOUTUBE_API_KEY4;
    // const result = this.httpClient.get('search', params)
    // .then(res => {
      
    //   if (res.status === 403) {
    //     this.changeYoutubeApiKey();
    //     this.search(params);   
    //   } else {
    //     console.log(res);
    //     return res;
    //   }
    // });
    // return result;
    // params.params.key = process.env.REACT_APP_YOUTUBE_API_KEY4;
    return this.httpClient.get('search', params);
  }

  async videos(params) {
    // console.log(params);
    // params.params.key = process.env.REACT_APP_YOUTUBE_API_KEY4;
    return this.httpClient.get('videos', params);
  }

  async channels(params) {
    return this.httpClient.get('channels', params);
  }
}