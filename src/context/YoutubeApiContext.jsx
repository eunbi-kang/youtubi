import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
import FakeYoutubeClient from '../api/fakeYoutubeClient';
import YoutubeClient from '../api/youtubeClient';



export const YoutubeApiContext = createContext();

// const client = new FakeYoutubeClient();
// const client = new YoutubeClient();


// 배포용 (production)
const client = process.env.NODE_ENV === "development" ? new FakeYoutubeClient() : new YoutubeClient() ;
//테스트용 (development)
// const client = process.env.NODE_ENV === "development" ? new YoutubeClient() : new FakeYoutubeClient() ;


const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}





