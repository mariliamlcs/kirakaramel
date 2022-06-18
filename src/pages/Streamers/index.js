import { Link } from 'react-router-dom';
import './index.css';
import StreamerRight from "./StreamerRight";
import StreamerLeft from "./StreamerLeft";
import fineLine from '../../assets/fineLine.png';
import fundo from "../../assets/fundo.png";
import fundo2 from "../../assets/fundo2.png";

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
    <div className='streamer-right'>
    <StreamerRight 
        name="Sunny"
        about="Ut ut laborum aute Lorem laborum. Excepteur nisi laborum quis fugiat laborum ullamco officia magna sint ut. Aute ea laboris deserunt veniam qui ipsum nulla voluptate ipsum tempor est elit cillum in."
        picture={fundo}
    />
    </div>

    <div className='streamer-left'>
    <StreamerLeft
        name="Gio"
        about="Do aute dolor do ut sunt sunt amet anim cupidatat. Incididunt aute non cillum ullamco tempor exercitation qui do non irure do. Proident mollit sit enim voluptate magna consectetur labore eu est eu."
        picture={fundo2}
    />
    </div>

    <div className='streamer-right'>
    <StreamerRight 
        name="Pamy"
        about="Do aute dolor do ut sunt sunt amet anim cupidatat. Incididunt aute non cillum ullamco tempor exercitation qui do non irure do. Proident mollit sit enim voluptate magna consectetur labore eu est eu."
        picture={fundo}
    />
    
    </div>

</div>
</div>
</>
)
}