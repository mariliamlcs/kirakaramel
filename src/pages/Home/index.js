import './index.css';
import imgHome from '../../assets/bannerHome.png';
import fineLine from '../../assets/fineLine.png';
import iconGio from '../../assets/gio.png';
import iconPamy from '../../assets/pamy.png';
import iconSunny from '../../assets/sunny.png';
import newsletterBear from '../../assets/newsletterBear.png';
import { Link } from 'react-router-dom';
import { i18n } from '../../translate/i18n';

export default function Home(){
  return(
  <>
  <div className='banner-home'>
    <img src={imgHome} alt=''/>
  </div>
  <div className='content'>

    <div className='title-sections'>
      <p className='brown-text'><b>as</b></p> <p className='orange-text'>streamers</p>
    </div>
    <div className='fine-line'>
    <img src={fineLine} alt=''/>
    </div>
    <div className='streamers-home'>
      <img src={iconGio} alt=''/>
      <img src={iconPamy} alt=''/>
      <img src={iconSunny} alt=''/>
    </div>

  <div className='section-home'>
    <div className='title-welcome'>
      <h1 className='orange-text'>Prazer, <b>Kira</b></h1><h1 className='brown-text'><b>&nbsp;Kara</b></h1>
    </div>

    <div className='text-welcome'>
      <p>{i18n.t('messages.textW1')}</p>

      <p>{i18n.t('messages.textW2')}</p>
      <br/>
      <Link to="/streamers" className='button-marrom'>{i18n.t('titles.knowUs')}</Link>
    </div>
  </div>

  <div className='section-newsletter'>
    <div>
    <h1 className='title-newsletter'>{i18n.t('messages.newsletter1')} <br/><b>{i18n.t('messages.newsletter2')}</b></h1>
    <input className='input-newsletter' placeholder='e-mail'/><br/>
    <a href='/' className='send-button'>{i18n.t('titles.confirm')}</a>
    </div>
    <div>
    <img src={newsletterBear} alt='' className='bear'/>
    </div>
  </div>

  </div> {/* content */}
  </>
  );
};
