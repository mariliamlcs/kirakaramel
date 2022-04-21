import './index.css';
import imgHome from '../../assets/bannerHome.png';

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
      <p>Parágrafo</p>
      <p>Parágrafo</p>
    </div>
    </>
  );
};
