import { Link } from 'react-router-dom';
import './index.css';
import fineLine from '../../assets/fineLine.png';
import fundo from "../../assets/fundo.png";
import fundo2 from "../../assets/fundo2.png";
import readMore from "../../assets/rmore.png";
import DateGrey from '../../components/DateGrey//DateGrey'; 
import DateOrange from '../../components/DateOrange/DateOrange';
import { i18n } from '../../translate/i18n';

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
{/*PAMY*/}    
    <div className='streamer-right'>
    <div className='flex'>
    <div>
        <h2>Pamy</h2>
        <p>{i18n.t('messages.aboutPamy')}</p>
        <h3>{i18n.t('titles.streamSchedule')}</h3>
        <div className='agenda-streamer'>
        
        <DateGrey 
            day={i18n.t('titles.monday')}
        />
        <DateOrange 
            day={i18n.t('titles.tuesday')}
            hour="20:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.wednesday')}
            hour="20:00 PM"
        />
        <DateGrey 
            day={i18n.t('titles.thursday')}
        />
        <DateOrange 
            day={i18n.t('titles.friday')}
            hour="20:00 PM"
        />
        <DateGrey 
            day={i18n.t('titles.saturday')}
        />
        <DateOrange 
            day={i18n.t('titles.sunday')}
            hour="20:00 PM"
        />
        </div>
        <p className='read-more'>{i18n.t('messages.readMore')} <img src={readMore} alt=""></img></p>
    </div>
    <div>
        <img src={fundo} alt=""/>
    </div>
    <div></div>
    </div>
    </div>

{/*JESSE*/}
    <div className='streamer-left'>
    <div className='flex'>
    <div>
        <img src={fundo2} alt=""/>
    </div>
    <div>
        <h2>Jesse</h2>
        <p>{i18n.t('messages.aboutJesse')}</p>
        <h3>{i18n.t('titles.streamSchedule')}</h3>
        <div className='agenda-streamer'>
        
        <DateOrange 
            day={i18n.t('titles.monday')}
            hour="04:00 PM"
        />
        <DateGrey 
            day={i18n.t('titles.tuesday')}
        />
        <DateOrange 
            day={i18n.t('titles.wednesday')}
            hour="04:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.thursday')}
            hour="04:00 PM"
        />
        <DateGrey 
            day={i18n.t('titles.friday')}
        />
        <DateOrange 
            day={i18n.t('titles.saturday')}
            hour="20:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.sunday')}
            hour="03:00 PM"
        />
        </div>
    <p className='read-more'>{i18n.t('messages.readMore')} <img src={readMore} alt=""></img></p>
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
        <h2>Hanako</h2>
        <p>{i18n.t('messages.aboutHanako')}</p>
        <h3>{i18n.t('titles.streamSchedule')}</h3>
        <div className='agenda-streamer'>
        
        <DateOrange 
            day={i18n.t('titles.monday')}
            hour="07:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.tuesday')}
            hour="07:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.wednesday')}
            hour="07:00 PM"
        />
        <DateGrey 
            day={i18n.t('titles.thursday')}
        />
        <DateOrange 
            day={i18n.t('titles.friday')}
            hour="07:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.saturday')}
            hour="07:00 PM"
        />
        <DateGrey 
            day={i18n.t('titles.sunday')}
        />
        </div>
    <p className='read-more'>{i18n.t('messages.readMore')} <img src={readMore} alt=""></img></p>
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