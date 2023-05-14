import { useLocation } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import VideoPlaylist from './VideoPlaylist';

export default function VideoSite({playList}) {

   

    const location = useLocation()

    const id = location.state.id

    window.scrollTo(0, 0);

    
    
   

    return (

        <>

           <VideoPlayer src={playList[id].url} />

            <VideoPlaylist playList={playList}/>

        </>

        
    )
}