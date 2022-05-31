import './index.css';
import readMore from "../../assets/rmore.png";

export default function StreamerLeft ({name, picture, about, agenda}) {
    return (
        <div className='flex'>
            <div>
                <img src={picture} alt={name} />
            </div>
            <div>
                <h2 >{name}</h2>
                <p>{about}</p>
                <h3>Agenda de lives</h3>
                <p>{agenda}</p>
                <p className='read-more'>Saiba mais <img src={readMore}></img></p>
            </div>
        </div>
    )
}
