import './index.css';
import estrelinha from '../../assets/estrelinha.png';
import Collapsible from 'react-collapsible';

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

        <Collapsible trigger="Clique aqui">
            <p>Non officia consectetur nostrud velit laboris ipsum ullamco elit cillum Lorem ut dolore nulla.</p>
        </Collapsible>
    </div>
    </>
    )
}