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
      <div className='title-welcome'>
        <h1 className='orange-text'>Prazer, <b>Kira</b></h1><h1 className='brown-text'><b>&nbsp;Kara</b></h1>
      </div>

      <div className='text-welcome'>
        <p>Elit eu ullamco nulla consequat reprehenderit ullamco et eu duis adipisicing cupidatat laborum nostrud commodo. Cillum fugiat fugiat cupidatat enim. Laboris ad id excepteur elit et pariatur irure consequat id nisi incididunt. Consectetur cillum aliquip eu quis deserunt occaecat magna aute voluptate qui irure dolor. Reprehenderit dolor cupidatat irure quis.</p>
      </div>
        
    </div>
    </>
  );
};
