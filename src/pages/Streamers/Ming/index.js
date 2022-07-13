import '.././page.css';
import linhaLaranja from '../../../assets/linhalaranja.png';
import mingImg1 from '../../../assets/ming-pessoal.png';
import mingImg2 from '../../../assets/ming-video-icon.png';
import DateSim from '../../../components/DateSim/DateSim';
import DateNao from '../../../components/DateNao/DateNao';
import mingChibi from '../../../assets/ming-mini.png';
import { Link } from 'react-router-dom';

export default function Ming(){
    return(
<div className="content">
    <div className='title-sections pessoal'>
        <p className='brown-text'><Link to="/Ming">Ming</Link></p> 
    </div>
    
    <div className='fine-line'>
        <img src={linhaLaranja} alt=''/>
    </div>

    <div className='container1'>
        <div className='grid-sobre-mim'>
            <h3>Sobre Mim</h3>
            <p>{i18n.t('messages.aboutMing')}</p>
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
            <img src={mingImg1} alt=""/>
        </div>
    </div>

    <div className='container2'>
        <img src={mingImg2} alt=""/>
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