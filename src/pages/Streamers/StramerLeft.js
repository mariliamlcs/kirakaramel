import './index.css';

export default function StreamerLeft ({name, picture, about}) {
    return (
        <div className='flex'>
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
