import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import axios from 'axios';

export default function Videos() {
  const { keyword } = useParams();
  console.log(keyword);
  console.log(`${keyword ? "search" : "popular"}.json`);
 
  const baseUrl = process.env.PUBLIC_URL;

  const queryFn = async () => {
    return axios.get(`${baseUrl}/videos/${keyword ? "search" : "popular"}.json`)
      .then((res) => {
        console.log(res);
        return res.data.items})
      
  };
  
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn,
  });
  
  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : "🔥"}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
