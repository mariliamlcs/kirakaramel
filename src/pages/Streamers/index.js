import { Link } from 'react-router-dom';
import './index.css';
import fineLine from '../../assets/fineLine.png';
import readMore from "../../assets/rmore.png";
import DateGrey from '../../components/DateGrey//DateGrey'; 
import DateOrange from '../../components/DateOrange/DateOrange';
import { i18n } from '../../translate/i18n';
import sunny from '../../assets/sunny.png';
import gio from '../../assets/gio.png';
import pamy from '../../assets/pamy.png';
import ming from '../../assets/ming.png';
import jesse from '../../assets/jesse.png';
import hanako from '../../assets/hana.png';
import ynasshi from '../../assets/ynasshi.png';

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
{/*SUNNY*/}
<div className='streamer-right'>
    <div className='flex'>
    <div>
    <h2><Link to="/Sunny">Sunny</Link></h2>
        <p>{i18n.t('messages.aboutSunny')}</p>
        <h3>{i18n.t('titles.streamSchedule')}</h3>
        <div className='agenda-streamer'>
        <DateOrange 
            day={i18n.t('titles.monday')}
            hour="08:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.tuesday')}
            hour="08:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.wednesday')}
            hour="10:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.tuesday')}
            hour="08:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.friday')}
            hour="10:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.saturday')}
            hour="04:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.tuesday')}
            hour="04:00 PM"
        />
        </div>
    <p className='read-more'><Link to="/Sunny">{i18n.t('messages.readMore')}</Link> <img src={readMore} alt=""></img></p>
    </div>
    <div>
        <img src={sunny} alt=""/>
    </div>
    </div>
    </div>

{/*Gio*/}    
    <div className='streamer-left'>
    <div className='flex'>
    <div>
        <img src={gio} alt=""/>
    </div>
    <div>
        <h2><Link to="/Gio">Gio</Link></h2>
        <p>{i18n.t('messages.aboutGio')}</p>
        <h3>{i18n.t('titles.streamSchedule')}</h3>
        <div className='agenda-streamer'>
        
        <DateGrey 
            day={i18n.t('titles.monday')}
        />
        <DateOrange 
            day={i18n.t('titles.tuesday')}
            hour="05:00 PM"
        />
        <DateGrey 
            day={i18n.t('titles.wednesday')}
        />
        <DateOrange 
            day={i18n.t('titles.thursday')}
            hour="05:00 PM"
        />
        <DateGrey 
            day={i18n.t('titles.friday')}
        />
        <DateOrange 
            day={i18n.t('titles.saturday')}
            hour="05:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.sunday')}
            hour="05:00 PM"
        />
        </div>
        <p className='read-more'><Link to="/Gio">{i18n.t('messages.readMore')}</Link> <img src={readMore} alt=""></img></p>
    </div>
    </div>
    </div>

{/*Pamy*/}
    <div className='streamer-right'>
    <div className='flex'>
    <div>
        <h2><Link to="/Pamy">Pamy</Link></h2>
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
    <p className='read-more'><Link to="/Pamy">{i18n.t('messages.readMore')}</Link> <img src={readMore} alt=""></img></p>
    </div>
    <div>
        <img src={pamy} alt=""/>
    </div>
    </div>
    </div>

{/*Ming*/}
    <div className='streamer-left'>
    <div className='flex'>
    <div>
        <img src={ming} alt=""/>
    </div>
    <div>
        <h2><Link to="/Ming">Ming</Link></h2>
        <p>{i18n.t('messages.aboutMing')}</p>
        <h3>{i18n.t('titles.streamSchedule')}</h3>
        <div className='agenda-streamer'>
        
        <DateOrange 
            day={i18n.t('titles.monday')}
            hour="08:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.tuesday')}
            hour="08:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.wednesday')}
            hour="10:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.tuesday')}
            hour="08:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.friday')}
            hour="10:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.saturday')}
            hour="04:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.tuesday')}
            hour="04:00 PM"
        />
        </div>
    <p className='read-more'><Link to="/Ming">{i18n.t('messages.readMore')}</Link> <img src={readMore} alt=""></img></p>
    </div>
    </div>
    </div>

{/*Jesse*/}
<div className='streamer-right'>
    <div className='flex'>
    <div>
        <h2><Link to="/Jesse">Jesse</Link></h2>
        <p>{i18n.t('messages.aboutJesse')}</p>
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
    <p className='read-more'><Link to="/Jesse">{i18n.t('messages.readMore')}</Link> <img src={readMore} alt=""></img></p>
    </div>
    <div>
        <img src={jesse} alt=""/>
    </div>
    </div>
    </div>

{/*Ynasshi*/}
<div className='streamer-left'>
    <div className='flex'>
    <div>
        <img src={ynasshi} alt=""/>
    </div>
    <div>
        <h2><Link to="/Ynasshi">Ynasshi</Link></h2>
        <p>{i18n.t('messages.aboutYnasshi')}</p>
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
        <DateOrange 
            day={i18n.t('titles.thursday')}
            hour="07:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.friday')}
            hour="07:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.saturday')}
            hour="07:00 PM"
        />
        <DateOrange 
            day={i18n.t('titles.sunday')}
            hour="07:00 PM"
        />
        </div>
    <p className='read-more'><Link to="/Ynasshi">{i18n.t('messages.readMore')}</Link> <img src={readMore} alt=""></img></p>
    </div>
    </div>
    </div>


{/*Hanako*/}
<div className='streamer-right'>
    <div className='flex'>
    <div>
        <h2><Link to="/Hanako">Hanako</Link></h2>
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
    <p className='read-more'><Link to="/Hanako">{i18n.t('messages.readMore')}</Link> <img src={readMore} alt=""></img></p>
    </div>
    <div>
        <img src={hanako} alt=""/>
    </div>
    </div>
    </div>

</div>
</div>
</>
)
}
