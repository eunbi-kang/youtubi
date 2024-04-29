import { useContext } from "react";
import { createContext } from "react";
import FakeYoutube from "../api/fakeYoutube";
import Youtube from "../api/youtube";

export const YoutubeApiContext = createContext();

const youtube = process.env.NODE_ENV === "development" ? new FakeYoutube() : new Youtube();

// const youtube = new FakeYoutube(); // Mock Data 사용하는 버전    
//const youtube = new Youtube(); // 실제 API 데이터 사용하는 버전 
    


 


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


