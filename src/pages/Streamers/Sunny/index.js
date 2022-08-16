import '.././page.css';
import linhaLaranja from '../../../assets/linhalaranja.png';
import sunnyImg1 from '../../../assets/sunny-sobre.png';
import sunnyImg2 from '../../../assets/sunny-video.png';
import DateSim from '../../../components/DateSim/DateSim';
import DateNao from '../../../components/DateNao/DateNao';
import { Link } from 'react-router-dom';
import { i18n } from '../../../translate/i18n';

export default function Sunny(){
    return(
<div className="content">
    <div className='title-sections pessoal'>
        <p className='brown-text'><Link to="/Sunny">Sunny</Link></p> 
    </div>
    
    <div className='fine-line'>
        <img src={linhaLaranja} alt=''/>
    </div>

    <div className='container1'>
        <div className='grid-sobre-mim'>
            <h3>Sobre Mim</h3>
            <p>{i18n.t('messages.aboutSunny')}</p>
            <div className='about-me-list'>
                <ul>
                    <li><b>{i18n.t('titles.streamerName')}</b> Sunny Seiki</li>
                    <li><b>{i18n.t('titles.streamerLanguage')}</b></li>
                    <li><b>{i18n.t('titles.streamerDebutDate')}</b></li>
                    <li><b>{i18n.t('titles.streamerGender')}</b></li>
                    <li><b>{i18n.t('titles.streamerAge')}</b> 21</li>
                </ul>
                <ul>
                    <li><b>{i18n.t('titles.streamerBirthday')}</b></li>
                    <li><b>{i18n.t('titles.streamerHeight')}</b> 1,70m</li>
                    <li><b>{i18n.t('titles.streamerFanbase')}</b></li>
                    <li><b>{i18n.t('titles.streamerIllustrator')}</b> @Winyaboo</li>
                    <li><b>{i18n.t('titles.streamerLive2D')}</b> @Morigurath</li>
                </ul>
            </div>
            <h3 className='sm-title'>Redes Sociais</h3>
            <div className='social-media'>
                <p>Twitter</p>
                <p>Twitch</p>
            </div>
        </div>
        <div className='imagem-1'>
            <img src={sunnyImg1} alt=""/>
        </div>
    </div>

    <div className='container2'>
        <img src={sunnyImg2} alt=""/>
        <div className='personal-video'>

        </div>
    </div>

    <div className='container3'>
        <div className='titulo-agenda'>
            <h3>{i18n.t('titles.streamSchedule')}</h3>
            <div className='setinha'></div>
        </div>
        <div className='agenda-dias'>
        <div className='row'>
        <DateSim 
            day={i18n.t('titles.monday')}
            hour="08:00 PM"
        />
        <DateSim 
            day={i18n.t('titles.tuesday')}
            hour="08:00 PM"
        />
        <DateSim 
            day={i18n.t('titles.wednesday')}
            hour="10:00 PM"
        />
        <DateSim 
            day={i18n.t('titles.tuesday')}
            hour="08:00 PM"
        />
        </div>
        <div className='row'>
        <DateSim 
            day={i18n.t('titles.friday')}
            hour="10:00 PM"
        />
        <DateSim 
            day={i18n.t('titles.saturday')}
            hour="04:00 PM"
        />
        <DateSim 
            day={i18n.t('titles.sunday')}
            hour="04:00 PM"
        />
        </div>
        </div>
        
    </div>
</div>
)
}