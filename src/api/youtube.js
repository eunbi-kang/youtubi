import axios from "axios";

export default class Youtube {
  constructor() {
    /* axios 통신을 할 때, 필요한 기본적인 Setting을 axios.create를 통해 설정해 준 다음
       httpClient에 할당해준다. */
    this.httpClient = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: { key: process.env.REACT_APP_YOUTUBE_API_KEY }
    })
  }

  async search(keyword) {
    /*   JavaScript에서 함수 앞에 #을 붙이면 Private 함수로 만든다.
     *   Private 함수는 클래스 내부적으로는 호출 가능하나, 외부에서는 호출할 수 없다.   */
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.httpClient
      .get('search', {params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword
      }})
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.httpClient
      .get('videos', {params: {
        part: 'snippet',
        maxResults: 25,
        chart: 'mostPopular',
      },
    })
    .then((res) => res.data.items)
  }
}
