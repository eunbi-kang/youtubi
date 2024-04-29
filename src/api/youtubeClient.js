import axios from "axios";

export default class YoutubeClient {
  constructor() {
    /* axios 통신을 할 때, 필요한 기본적인 Setting을 axios.create를 통해 설정해 준 다음
       httpClient에 할당해준다. */
    this.httpClient = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: { key: process.env.REACT_APP_YOUTUBE_API_KEY }
    })
  }

  async search(params) {
    return this.httpClient.get('search', params);
  }

  async videos(params) {
    return this.httpClient.get('videos', params);
  }
}