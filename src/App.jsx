import { React, useState, useEffect } from 'react';
import styles from './App.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyDiBWcG3Luxfn6dOqM8RLKyP9n93xwnd7c&key=AIzaSyDiBWcG3Luxfn6dOqM8RLKyP9n93xwnd7c&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDiBWcG3Luxfn6dOqM8RLKyP9n93xwnd7c',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);
  //마운트나업데이트가 되었을때 호출된다
  //텅텅비어진거를 리턴하면 한번만 마운트가 됫을때만 호출된다
  //[]안에 비디오를 넣으면 비디오가 업데이트될떄마다 콜백함수가 호출이된다
  return (
    <div className={styles.App}>
      <SearchHeader />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
