import React, { useEffect } from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getApiDataSlice } from "../utils/getApiDataSlice";

const VideoContainer = () => {
  const videoData = useSelector((store) => store.data);

  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(getApiDataSlice());
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (videoData.data) {
    return (
      <div className="flex flex-wrap p-3 m-4">
        {videoData.data.items[0] && (
          <AdVideoCard info={videoData.data.items[0]} />
        )}
        {videoData.data.items.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    );
  }
};

export default VideoContainer;
