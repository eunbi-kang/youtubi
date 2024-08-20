import { createContext, useContext } from 'react';
import Youtube from '../api/youtube';
import FakeYoutubeClient from '../api/fakeYoutubeClient';
import YoutubeClient from '../api/youtubeClient';



export const YoutubeApiContext = createContext();

// const client = new FakeYoutubeClient();
// const client = new YoutubeClient();


/* ----- 아래에서 수정 ------ */
// 배포용
// const client = process.env.NODE_ENV === "development" ? new FakeYoutubeClient() : new YoutubeClient() ;
//테스트용
// const client = process.env.NODE_ENV === "development" ? new YoutubeClient() : new FakeYoutubeClient() ;

const client = new YoutubeClient(); // 나중에 지워야 할 코드

/* ------ 위에서 수정 ------- */
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





