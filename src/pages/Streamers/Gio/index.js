import '.././page.css';
import linhaLaranja from '../../../assets/linhalaranja.png';
import gioImg1 from '../../../assets/gio-pessoal.png';
import gioImg2 from '../../../assets/gio-video-icon.png';
import DateSim from '../../../components/DateSim/DateSim';
import DateNao from '../../../components/DateNao/DateNao';
import gioChibi from '../../../assets/gio-mini.png';
import { Link } from 'react-router-dom';

export default function Gio(){
    return(
<div className="content">
    <div className='title-sections pessoal'>
        <p className='brown-text'><Link to="/Gio">Gio</Link></p> 
    </div>
    
    <div className='fine-line'>
        <img src={linhaLaranja} alt=''/>
    </div>

    <div className='container1'>
        <div className='grid-sobre-mim'>
            <h3>Sobre Mim</h3>
            <p>{i18n.t('messages.aboutGio')}</p>
            <div className='about-me-list'>
                <ul>
                    <li><b>Name:</b> nickname</li>
                    <li>Language:</li>
                    <li>Debut Date:</li>
                    <li>Gender:</li>
                    <li>Age:</li>
                </ul>
                <ul>
                    <li>Birthday:</li>
                    <li>Height:</li>
                    <li>Fanbase:</li>
                    <li>Illustrator:</li>
                    <li>Live2D:</li>
                </ul>
            </div>
            <h3 className='sm-title'>Redes Sociais</h3>
            <div className='social-media'>
                <p>Twitter</p>
                <p>Twitch</p>
            </div>
        </div>
        <div className='imagem-1'>
            <img src={gioImg1} alt=""/>
        </div>
    </div>

    <div className='container2'>
        <img src={gioImg2} alt=""/>
        <div className='personal-video'>

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