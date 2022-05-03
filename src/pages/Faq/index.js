import './index.css';
import estrelinha from '../../assets/estrelinha.png';

export default function Faq(){
    return(
    <> 
    <div className="content">
        <div className='title-sections'>
        <div className='estrelinha'><img src={estrelinha}/></div>
        <h1 className='faq-title title-sections orange-text'>
        F.A.Q&nbsp;<b>Kira Kara</b></h1>
        <div className='estrelinha'><img src={estrelinha}/></div>
        </div>
        <br/>
        <hr className='linha-marrom'/>
        <hr className='linha-rose'/>

    </div>
    </>
    )
}