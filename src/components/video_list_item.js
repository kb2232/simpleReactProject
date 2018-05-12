import React from 'react';

const VideoListItem = (props) => {
  var videoSelect = props.VideoSelect;
  var video = props.video, imageUrl,imgtitle;
  imageUrl = video.snippet.thumbnails.default.url;
  imgtitle = video.snippet.title;

	return (
  <li onClick={()=>videoSelect(video)} className="list-group-item video-item">
    <div className="video-list media">
      <div className="media-left">
        <img className="media-object" src={imageUrl}/>
      </div>
      <div className="media-body">
        <div className="media-heading" >
          {imgtitle}
        </div>
      </div>

    </div>
  </li>
  );
};

export default VideoListItem;
