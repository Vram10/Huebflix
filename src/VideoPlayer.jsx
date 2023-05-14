export default function VideoPlayer({src}){

    

    

    return (
        <div className="video-player">
            <iframe width="1280" height="720" src={src} title="hi" frameborder="0" allow="autoplay" allowfullscreen="true"></iframe>
        </div>
    )
}