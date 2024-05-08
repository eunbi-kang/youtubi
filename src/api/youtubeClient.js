import axios from "axios";

export default class YoutubeClient {

  state = {
    index: 1,
    key: process.env["REACT_APP_YOUTUBE_API_KEY1"],
    keyPrefix: "REACT_APP_YOUTUBE_API_KEY"
  }

  constructor() {
    /* axios 통신을 할 때, 필요한 기본적인 Setting을 axios.create를 통해 설정해 준 다음
       httpClient에 할당해준다. */
    this.httpClient = axios.create({
      // baseURL: 'http://www.googleapis.com/youtube/v3',
      // params: { key: process.env.REACT_APP_YOUTUBE_API_KEY3 }
      baseURL: 'http://www.googleapis.com/youtube/v3'
    })
  }

  rotateYoutubeKey() {
    console.log("rotate executed" + this.state.index);
    if (this.state.index < 4) {
      this.state.index = this.state.index + 1;
      this.state.key = process.env[this.state.keyPrefix + this.state.index];
      console.log(this.state.key);
    } else if (this.state.index === 4) {
      this.state.index = 1;
      this.state.key = process.env["REACT_APP_YOUTUBE_API_KEY1"];
    }
    console.log("rotate finishied" + this.state.index);
    // Key 4개 모두 실패 시 fakeYoutubeClient 호출하도록 변경
  }

  async search(params) {
    params.params.key = this.state.key;
    const result = this.httpClient.get('search', params)
      .then((response) => {
        // console.log(this.state.key);
        // console.log(response.status);
        return response;
      })
      .catch((err) => {
        if (err.response.status === 403) {
          console.log("403");
          this.rotateYoutubeKey();
        }
        console.log(err);
      });
    return result;
  }

  async videos(params) {
    params.params.key = this.state.key;
    const result = this.httpClient.get('videos', params)
      .then((response) => {
        // console.log(this.state.key);
        // console.log(response.status);
        return response;
      })
      .catch((err) => {
        if (err.response.status === 403) {
          console.log("403");
          this.rotateYoutubeKey();
        }
        console.log(err);
      });
    return result;
  }

  async channels(params) {
    params.params.key = this.state.key;
    const result = this.httpClient.get('channels', params)
      .then((response) => {
        // console.log(this.state.key);
        // console.log(response.status);
        return response;
      })
      .catch((err) => {
        if (err.response.status === 403) {
          console.log("403");
          this.rotateYoutubeKey();
        }
        console.log(err);
      });
    return result;
  }
}
