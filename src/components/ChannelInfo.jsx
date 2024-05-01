import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();

  const { data: url } = useQuery({
    queryKey: ["channel", id],
    queryFn: () => youtube.channelImageUrl(id),
  });

  return (
    <div>
      {url && <img src={url} alt={name} />}
      <p> {name} </p>
    </div>
  );
}
