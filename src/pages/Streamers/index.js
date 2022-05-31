import './index.css';
import StreamerRight from "./StreamerRight";
import StreamerLeft from "./StreamerLeft";
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
    <StreamerRight 
        name="Sunny"
        about="Ut ut laborum aute Lorem laborum. Excepteur nisi laborum quis fugiat laborum ullamco officia magna sint ut. Aute ea laboris deserunt veniam qui ipsum nulla voluptate ipsum tempor est elit cillum in."
        picture={sunnyImg}
    />

    <StreamerLeft
        name="Gio"
        about="Do aute dolor do ut sunt sunt amet anim cupidatat. Incididunt aute non cillum ullamco tempor exercitation qui do non irure do. Proident mollit sit enim voluptate magna consectetur labore eu est eu."
        picture={gioImg}
    />

    <StreamerRight 
        name="Sunny"
        about="Lorem ipsum"
        picture={sunnyImg}
    />
    </div>
</div>
</>
)
}