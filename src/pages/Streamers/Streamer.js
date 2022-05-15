import './index.css';

export default function Streamer ({name, picture, about}) {
    return (
        <div className='streamer-right'>
            <div>
                <h2 >{name}</h2>
                <p>{about}</p>
            </div>
            <div>
                <img src={picture} alt={name} />
            </div>
        </div>
    )
}
