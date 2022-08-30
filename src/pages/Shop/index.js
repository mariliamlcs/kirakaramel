import './index.css';
import estrelas from "../../assets/tres-estrelas.png";
import { i18n } from '../../translate/i18n';

export default function Shop(){
    return(
    <> 
    <div className="em-breve-box">
        <div>
        <div className='title'>{i18n.t('titles.soon')}</div>
        <img src={estrelas} alt=""/>
        <p className="soon-text">{i18n.t('messages.soonText')}</p>
        <a href='/' className='send-button'>{i18n.t('titles.confirm')}</a>
        </div>
    </div>
    </>
    )
}