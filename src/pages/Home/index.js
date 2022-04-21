import './index.css';
import imgHome from '../../assets/bannerHome.png';
import fineLine from '../../assets/fineLine.png';

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
        
      </div>
      <p>Parágrafo</p>
      <p>Parágrafo</p>
    </div>
    </>
  );
};
