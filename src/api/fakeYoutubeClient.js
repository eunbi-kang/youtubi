import axios from "axios";
const baseUrl = process.env.PUBLIC_URL;

export default class FakeYoutubeClient {
  async search({ params }) {
    // return params.relatedToVideoId
    //   ? axios.get(`${baseUrl}/videos/related.json`)
    //   : axios.get(`${baseUrl}/videos/search.json`);
    return axios.get(`/videos/${params.relatedToVideoId ? 'related' : 'search'}.json`)
  }

  async videos() {
    return axios.get(`${baseUrl}/videos/popular.json`);
  }

  async channels() {
    return axios.get(`${baseUrl}/videos/channel.json`);
  }
}
