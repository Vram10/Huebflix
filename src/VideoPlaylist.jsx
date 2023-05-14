import VideoPlayerItem from "./VideoPlaylistItem";

export default function VideoPlaylist({playList}){

    


    return (
        <div className='video-playlist'>
            <ul className='video-playlist-list'>

            {playList.map(v => {
            return (
                <VideoPlayerItem vid={playList[v.key]} id={v.key}/> 
            )
          })}
                
            </ul>
        </div>
    )

}