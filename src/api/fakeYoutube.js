import axios from "axios";
const baseUrl = process.env.PUBLIC_URL;

export default class FakeYoutube {
//   constructor() {}

  async search(keyword) {
    /*   JavaScript에서 함수 앞에 #을 붙이면 Private 함수로 만든다.
     *   Private 함수는 클래스 내부적으로는 호출 가능하나, 외부에서는 호출할 수 없다.   */
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword() {
    return axios
      .get(`${baseUrl}/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return axios
      .get(`${baseUrl}/videos/popular.json`)
      .then((res) => res.data.items)
  }
}
