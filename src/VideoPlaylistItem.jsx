import { Link } from "react-router-dom";

export default function VideoPlayerItem({vid, id}){
    const i = id
    return (
        <li className='playlist-li'>
            <Link to={"/video"+vid.id} state={{id: i}} className='no-text-dec'><h3 className='playlist-title'>Folge {id +1}</h3><div className='playlist-container'><img src={vid.img} className='playlist-img' /><h4 className='playlist-desc'>{vid.titel}</h4></div></Link>
        </li>
    )
}