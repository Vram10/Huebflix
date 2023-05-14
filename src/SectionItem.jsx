import { Link } from "react-router-dom";

export default function SectionItem({src, id}){
    const i = id
    return (
        <li className="thumbnail-li">
           <Link to={"/video"+i}  state={{id: 0}}><img className="thumbnail-img" src={src} /></Link> 
        </li>
    )
}