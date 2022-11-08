import '.././page.css';
import linhaLaranja from '../../../assets/linhalaranja.png';
import jesseImg1 from '../../../assets/jesse-sobre.png';
import jesseImg2 from '../../../assets/jesse-video.png';
import DateSim from '../../../components/DateSim/DateSim';
import DateNao from '../../../components/DateNao/DateNao';
import { Link } from 'react-router-dom';
import { i18n } from '../../../translate/i18n';
import chibi from '../../../assets/chibi-jesse.png';
import iconTwitter from '../../../assets/iconTwitter.png';
import iconTwitch from '../../../assets/iconTwitch.png';
import iconTiktok from '../../../assets/iconTiktok.png';
// import video from '../../../assets/videos/JESSE.mp4'

export default function Jesse(){
    return(
<div className="content">
    <div className='title-sections pessoal'>
        <p className='brown-text'><Link to="/Gio">Jesse</Link></p> 
    </div>
    
    <div className='fine-line'>
        <img src={linhaLaranja} alt=''/>
    </div>

    <div className='container1'>
        <div className='grid-sobre-mim'>
            <h3>Sobre Mim</h3>
            <p>{i18n.t('jesse.about')}</p>
            <div className='about-me-list'>
            <ul>
                    <li><b>{i18n.t('titles.streamerName')}</b> Jesse Llum</li>
                    <li><b>{i18n.t('titles.streamerLanguage')}</b> {i18n.t('messages.portuguese')}</li>
                    <li><b>{i18n.t('titles.streamerDebutDate')}</b> {i18n.t('jesse.debut')}</li>
                    <li><b>{i18n.t('titles.streamerGender')}</b> {i18n.t('messages.gender')} </li>
                    <li><b>{i18n.t('titles.streamerAge')}</b> Bilhões </li>
                </ul>
                <ul>
                    <li><b>{i18n.t('titles.streamerBirthday')}</b> {i18n.t('jesse.birthday')}</li>
                    <li><b>{i18n.t('titles.streamerHeight')}</b> 1,67m</li>
                    <li><b>{i18n.t('titles.streamerFanbase')}</b> Poeirinhas/Sapecos </li>
                    <li><b>{i18n.t('titles.streamerIllustrator')}</b> @JesseLlum</li>
                    <li><b>{i18n.t('titles.streamerLive2D')}</b> @Driguerk</li>
                </ul>
            </div>
            <h3 className='sm-title'>{i18n.t('titles.sm')}</h3>
            <div className='social-media'>
                <p><a href='https://twitter.com/teste/JesseLlum' target='_blank' rel="noreferrer"><img src={iconTwitter} alt="Twitter"/></a></p>
                <p><a href='https://twitch.tv/JesseLlum/' target='_blank' rel="noreferrer"><img src={iconTwitch} alt="Twitch"/></a></p>
                <p><a href='https://tiktok.com/@JesseLlum' target='_blank' rel="noreferrer"><img src={iconTiktok} alt="TikTok"/></a></p>
            </div>
        </div>
        <div className='imagem-1'>
            <img src={jesseImg1} alt=""/>
        </div>
    </div>

    <div className='container2'>
        <img src={jesseImg2} alt=""/>
        <div className='personal-video'>
        <video width="100%" height="auto" controls autoPlay muted >
            <source src="" type="video/mp4"/>
        </video>
        </div>
    </div> 

    <div className='container3'>
        <div className='titulo-agenda'>
            <h3>Agenda</h3>
            <div className='setinha'></div>
        </div>
        <div className='agenda-dias'>
        <div className='row'>
        <DateNao 
            day={i18n.t('titles.monday')}
        />
        <DateSim 
            day={i18n.t('titles.tuesday')}
            hour="00:00 PM"
        />
        <DateSim 
            day={i18n.t('titles.wednesday')}
            hour="00:00 PM"
        />
        <DateSim 
            day={i18n.t('titles.thursday')}
            hour="00:00 PM"
        />
        </div>
        <div className='row'>
        <DateNao 
            day={i18n.t('titles.friday')}
        />
        <DateSim 
            day={i18n.t('titles.saturday')}
            hour="00:00 PM"
        />
        <DateNao 
            day={i18n.t('titles.sunday')}
        />
        <img src={chibi} alt="chibi" className="chibi-icon"/>
        </div>
        </div>
        
    </div>
</div>
)
}