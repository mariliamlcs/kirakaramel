import './index.css';
import imgHome from '../../assets/bannerHome.png';

export default function Home(){
  return(
    <>
    <div className='banner-home'>
      <img src={imgHome} />
    </div>
    <div className='content'>
      <h1>Page Home</h1>
      <p>Parágrafo</p>
      <p>Parágrafo</p>
    </div>
    </>
  );
};
