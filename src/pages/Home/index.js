import './index.css';
import imgHome from '../../assets/bannerHome.png';
import fineLine from '../../assets/fineLine.png';
import sunnyHome from '../../assets/sunny-home.png';
import gioHome from '../../assets/gio-home.png';
import pamyHome from '../../assets/pamy-home.png';
import mingHome from '../../assets/ming-home.png';
import jesseHome from '../../assets/jesse-home.png';
import ynaHome from '../../assets/yna-home.png';
import hanaHome from '../../assets/hana-home.png';
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
      <p className='brown-text'><b>{i18n.t('titles.the')}</b></p> <p className='orange-text'>streamers</p>
    </div>
    <div className='fine-line'>
    <img src={fineLine} alt=''/>
    </div>
    <div className='streamers-home'>
      <div className='box-home'>
      <div class='home-icon'><Link to="/Sunny"><img src={sunnyHome} alt=''/></Link></div>
      <div class='home-icon'><Link to="/Gio"><img src={gioHome} alt=''/></Link></div>
      <div class='home-icon'><Link to="/Pamy"><img src={pamyHome} alt=''/></Link></div>
      <div class='home-icon'><Link to="/Ming"><img src={mingHome} alt=''/></Link></div>
      <div class='home-icon'><Link to="/Jesse"><img src={jesseHome} alt=''/></Link></div>
      <div class='home-icon'><Link to="/Hanako"><img src={hanaHome} alt=''/></Link></div>
      <div class='home-icon'><Link to="/Ynasshi"><img src={ynaHome} alt=''/></Link></div>
      </div>
    </div>

  <div className='section-home'>
    <div className='title-welcome'>
      <h1 className='orange-text'>{i18n.t('titles.homeTitle')} <b>Kira</b></h1><h1 className='brown-text'><b>&nbsp;Kara</b></h1>
    </div>

    <div className='text-welcome'>
      <p>{i18n.t('messages.textW1')}</p>
    <br/>
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
