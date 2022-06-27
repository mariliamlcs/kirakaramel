import { Link } from 'react-router-dom';
import './index.css';
import fineLine from '../../assets/fineLine.png';
import fundo from "../../assets/fundo.png";
import fundo2 from "../../assets/fundo2.png";
import readMore from "../../assets/rmore.png";
import DateGrey from '../../components/DateGrey//DateGrey'; 
import DateOrange from '../../components/DateOrange/DateOrange';

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
    <div className='flex'>
    <div>
        <h2>Pamy</h2>
        <p>Do aute dolor do ut sunt sunt amet anim cupidatat. Incididunt aute non cillum ullamco tempor exercitation qui do non irure do. Proident mollit sit enim voluptate magna consectetur labore eu est eu.</p>
        <h3>Agenda de lives</h3>
        <div className='agenda-streamer'>
        <DateOrange 
            day="Segunda"
            hour="00:00 PM"
        />
        <DateOrange 
            day="Terça"
            hour="00:00 PM"
        />
        <DateGrey 
            day="Quarta"
        />
        <DateGrey 
            day="Quinta"
        />
        <DateGrey 
            day="Sexta"
        />
        <DateOrange 
            day="Sábado"
            hour="00:00 PM"
        />
        <DateOrange 
            day="Domingo"
            hour="00:00 PM"
        />
        </div>
        <p className='read-more'>Saiba mais <img src={readMore}></img></p>
    </div>
    <div>
        <img src={fundo} alt=""/>
    </div>
    <div></div>
    </div>
    </div>

    <div className='streamer-left'>
    <div className='flex'>
    <div>
        <img src={fundo2} alt=""/>
    </div>
    <div>
        <h2>Pamy2</h2>
        <p>Do aute dolor do ut sunt sunt amet anim cupidatat. Incididunt aute non cillum ullamco tempor exercitation qui do non irure do. Proident mollit sit enim voluptate magna consectetur labore eu est eu.</p>
        <h3>Agenda de lives</h3>
    <p className='read-more'>Saiba mais <img src={readMore}></img></p>
    </div>
    <div></div>
    </div>
    </div>

    <div className='streamer-right'>
    <div className='flex'>
    
    <div></div>
    </div>
    </div>

    <div className='streamer-right'>
    <div className='flex'>
    <div>
        <h2>Pamy3</h2>
        <p>Do aute dolor do ut sunt sunt amet anim cupidatat. Incididunt aute non cillum ullamco tempor exercitation qui do non irure do. Proident mollit sit enim voluptate magna consectetur labore eu est eu.</p>
        <h3>Agenda de lives</h3>
    <p className='read-more'>Saiba mais <img src={readMore}></img></p>
    </div>
    <div>
        <img src={fundo} alt=""/>
    </div>
    <div></div>
    </div>
    </div>

</div>
</div>
</>
)
}