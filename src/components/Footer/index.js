import './index.css';
import icon3f from '../../assets/iconSM3orange.png';
import iconTwitterf from '../../assets/iconTwitterorange.png';
import iconYTf from '../../assets/iconYouTubeorange.png';

const Footer=() =>{
    return (
    <footer>
    <div className="footer">
    <ul>
        <li><a href='https://twitter.com/KiraKaramel'><img src={iconTwitterf} alt='Twitter'/></a></li>
        <li><a href='/'><img src={iconYTf} alt='YouTube'/></a></li>
        <li><a href='https://apoia.se/kirakaramel'><img src={icon3f} alt='apoia-se'/></a></li>
    </ul>
    </div>
    </footer>
    );
};

export default Footer;
