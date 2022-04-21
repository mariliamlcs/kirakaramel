import './index.css';
import icon3f from '../../assets/iconSM3orange.png';
import iconTwitterf from '../../assets/iconTwitterorange.png';
import iconYTf from '../../assets/iconYouTubeorange.png';

const Footer=() =>{
    return (
    <footer>
    <div className="footer">
    <ul>
        <li>cookie policy</li>
        <li>privacy policy</li>
        <li>gift guideliness</li>
        <li>contact</li>
    </ul>
    <ul>
        <li><img src={iconTwitterf} alt='Twitter'/></li>
        <li><img src={iconYTf} alt='YouTube'/></li>
        <li><img src={icon3f}/></li>
    </ul>
    </div>
    </footer>
    );
};

export default Footer;
