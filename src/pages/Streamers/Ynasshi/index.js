import '.././page.css';
import linhaLaranja from '../../../assets/linhalaranja.png';
import ynaImg1 from '../../../assets/ynasshi-sobre.png';
import ynaImg2 from '../../../assets/ynasshi-video.png';
import DateSim from '../../../components/DateSim/DateSim';
import DateNao from '../../../components/DateNao/DateNao';
import { Link } from 'react-router-dom';
import { i18n } from '../../../translate/i18n';
// import video from '../../../assets/videos/YNASSHI.mp4'
 
export default function Ynasshi(){
    return(
<div className="content">
    <div className='title-sections pessoal'>
        <p className='brown-text'><Link to="/Ynasshi">Ynasshi</Link></p> 
    </div>
    
    <div className='fine-line'>
        <img src={linhaLaranja} alt=''/>
    </div>

    <div className='container1'>
        <div className='grid-sobre-mim'>
            <h3>Sobre Mim</h3>
            <p>{i18n.t('messages.aboutYnasshi')}</p>
            <div className='about-me-list'>
                <ul>
                    <li><b>{i18n.t('titles.streamerName')}</b> Ynasshi</li>
                    <li><b>{i18n.t('titles.streamerLanguage')}</b> {i18n.t('messages.portuguese')}</li>
                    <li><b>{i18n.t('titles.streamerDebutDate')}</b> {i18n.t('messages.dateSunny')}</li>
                    <li><b>{i18n.t('titles.streamerGender')}</b> {i18n.t('messages.gender')}</li>
                    <li><b>{i18n.t('titles.streamerAge')}</b> yes</li>
                </ul>
                <ul>
                    <li><b>{i18n.t('titles.streamerBirthday')}</b> {i18n.t('messages.birthdaySunny')}</li>
                    <li><b>{i18n.t('titles.streamerHeight')}</b> 1,63m</li>
                    <li><b>{i18n.t('titles.streamerFanbase')}</b></li>
                    <li><b>{i18n.t('titles.streamerIllustrator')}</b> @naco_nyako</li>
                    <li><b>{i18n.t('titles.streamerLive2D')}</b> @naco_nyako</li>
                </ul>
            </div>
            <h3 className='sm-title'>Redes Sociais</h3>
            <div className='social-media'>
                <p><a href='' target='_blank'>Twitter</a></p>
                <p><a href='' target='_blank'>Twitch</a></p>
                <p><a href='' target='_blank'>TikTok</a></p>
                <br/>
            </div>
        </div>
        <div className='imagem-1'>
            <img src={ynaImg1} alt=""/>
        </div>
    </div>

    <div className='container2'>
        <img src={ynaImg2} alt=""/>
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
            day="Segunda"
        />
        <DateSim 
            day="Terça"
            hour="00:00 PM"
        />
        <DateSim 
            day="Quarta"
            hour="00:00 PM"
        />
        <DateSim 
            day="Quinta"
            hour="00:00 PM"
        />
        </div>
        <div className='row'>
        <DateNao 
            day="Sexta"
        />
        <DateSim 
            day="Sábado"
            hour="00:00 PM"
        />
        <DateNao 
            day="Domingo"
        />
        </div>
        </div>
        
    </div>
</div>
)
}