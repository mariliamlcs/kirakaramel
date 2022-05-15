import './index.css';
import Streamer from "./Streamer";
import fineLine from '../../assets/fineLine.png';
import sunnyImg from "../../assets/sunny.png";
import gioImg from "../../assets/gio.png";

export default function Streamers(){
    return(
    <> 
    <div className="content">
    <div className='title-sections'>
    <p className='brown-text'><b>as</b></p> <p className='orange-text'>streamers</p>
    </div>
        
    <div className='fine-line'>
    <img src={fineLine} alt=''/>
    </div>

    <div className="streamers">
        <Streamer 
            name="Sunny"
            about="Lorem ipsum"
            picture={sunnyImg}
        />
        <Streamer 
            name="Gio"
            about="Lorem ipsum Gio"
            picture={gioImg}
        />
        <Streamer 
            name="Sunny"
            about="Lorem ipsum"
            picture={sunnyImg}
        />
    </div>
    </div>
    </>
    )
}