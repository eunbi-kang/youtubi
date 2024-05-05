export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    /*   JavaScript에서 함수 앞에 #을 붙이면 Private 함수로 만든다.
     *   Private 함수는 클래스 내부적으로는 호출 가능하나, 외부에서는 호출할 수 없다.   */
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id) {
    return this.apiClient.channels({params: {part: 'snippet', id}})
    .then(res => res.data.items[0].snippet.thumbnails.default.url)
  }
  
  async relatedVideos(id) {
    return this.apiClient.search({
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        channelId: id,
        order: "date"
      },
    })
    .then((res) => res.data.items.map((item) => ({ ...item, id: item.id.channelId }))
    );
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
    );
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular"
        },
      })
      .then((res) => res.data.items);
  }
}
