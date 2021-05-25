import { React, useState, useEffect } from "react";
import styles from "./App.module.css";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const selectVideo = (video) => {
        setSelectedVideo(video);
    };
    const search = (query) => {
        youtube //
            .search(query)
            .then((videos) => setVideos(videos));
    };
    useEffect(() => {
        youtube //
            .mostPopular()
            .then((videos) => setVideos(videos));
    }, []);
    //마운트나업데이트가 되었을때 호출된다
    //텅텅비어진거를 리턴하면 한번만 마운트가 됫을때만 호출된다
    //[]안에 비디오를 넣으면 비디오가 업데이트될떄마다 콜백함수가 호출이된다
    return (
        <div className={styles.App}>
            <SearchHeader onSearch={search} />
            {selectedVideo && <VideoDetail video={selectedVideo} />}
            <VideoList videos={videos} onVideoClick={selectVideo} />
        </div>
    );
}

export default App;
