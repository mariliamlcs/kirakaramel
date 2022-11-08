import '.././page.css';
import linhaLaranja from '../../../assets/linhalaranja.png';
import sunnyImg1 from '../../../assets/sunny-sobre.png';
import sunnyImg2 from '../../../assets/sunny-video.png';
import DateSim from '../../../components/DateSim/DateSim';
import { Link } from 'react-router-dom';
import { i18n } from '../../../translate/i18n';
import chibi from '../../../assets/chibi-sunny.png';
import iconTwitter from '../../../assets/iconTwitter.png';
import iconTwitch from '../../../assets/iconTwitch.png';
import iconTiktok from '../../../assets/iconTiktok.png';

export default function Sunny(){
    return(
<div className="content">
    <div className='title-sections pessoal'>
        <p className='brown-text'><Link to="/Sunny">Sunny Seiki</Link></p> 
    </div>
    
    <div className='fine-line'>
        <img src={linhaLaranja} alt=''/>
    </div>

    <div className='container1'>
        <div className='grid-sobre-mim'>
            <h3>Sobre Mim</h3>
            <p>{i18n.t('sunny.about')}</p>
            <div className='about-me-list'>
                <ul>
                    <li><b>{i18n.t('titles.streamerName')}</b> Sunny Seiki</li>
                    <li><b>{i18n.t('titles.streamerLanguage')}</b> {i18n.t('messages.portuguese')}</li>
                    <li><b>{i18n.t('titles.streamerDebutDate')}</b> {i18n.t('sunny.debut')}</li>
                    <li><b>{i18n.t('titles.streamerGender')}</b> {i18n.t('messages.gender')}</li>
                    <li><b>{i18n.t('titles.streamerAge')}</b> 21</li>
                </ul>
                <ul>
                    <li><b>{i18n.t('titles.streamerBirthday')}</b> {i18n.t('sunny.birthday')}</li>
                    <li><b>{i18n.t('titles.streamerHeight')}</b> 1,70m</li>
                    <li><b>{i18n.t('titles.streamerFanbase')}</b> Seikilhos</li>
                    <li><b>{i18n.t('titles.streamerIllustrator')}</b> @Winyaboo</li>
                    <li><b>{i18n.t('titles.streamerLive2D')}</b> @Morigurath</li>
                </ul>
            </div>
            <h3 className='sm-title'>{i18n.t('titles.sm')}</h3>
            <div className='social-media'>
                <p><a href='https://twitter.com/sunnyseiki/' target='_blank' rel="noreferrer"><img src={iconTwitter} alt="Twitter"/></a></p>
                <p><a href='https://twitch.tv/sunnyseiki/' target='_blank' rel="noreferrer"><img src={iconTwitch} alt="Twitch"/></a></p>
                <p><a href='https://tiktok.com/@sunnyseiki' target='_blank' rel="noreferrer"><img src={iconTiktok} alt="Tiktok"/></a></p>
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
            day={i18n.t('titles.thursday')}
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
        <img src={chibi} alt="chibi" className="chibi-icon"/>
        </div>
        </div>
        
    </div>
</div>
)
}