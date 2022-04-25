import './index.css';
import imgHome from '../../assets/bannerHome.png';
import fineLine from '../../assets/fineLine.png';
import iconGio from '../../assets/gio.png';
import iconPamy from '../../assets/pamy.png';
import iconSunny from '../../assets/sunny.png';

export default function Home(){
  return(
    <>
    <div className='banner-home'>
      <img src={imgHome} />
    </div>
    <div className='content'>
      <div className='title-sections'>
        <p className='brown-title'><b>as</b></p> <p className='orange-title'>streamers</p>
      </div>
      <div className='fine-line'>
      <img src={fineLine}/>
      </div>
      <div className='streamers-home'>
        <img src={iconGio}/>
        <img src={iconPamy}/>
        <img src={iconSunny}/>
      </div>
      <p>Parágrafo</p>
      <p>Parágrafo</p>
    </div>
    </>
  );
};
