import React from 'react';
import VideoListItem from './video_list_item';

const vidList = props => {
	const videoItems = props.videos.map(x => {
	return (
		<VideoListItem
		VideoSelect = {props.onVideoSelect}
		key={x.etag} 
		video={x} />
		);
	});
	return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default vidList;
