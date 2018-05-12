import React from 'react';

const videoDetail = props => {
  //check if video search has not yet been completed
  if(!props.video)
    return <div>Loading...</div>;

  var video, videoId, url;
  video = props.video;
  videoId = video.id.videoId;

  url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8 video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default videoDetail;