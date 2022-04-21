import './index.css';
import logoNavbar from '../../assets/logoNavbar.png';
import icon3 from '../../assets/iconSM3white.png';
import iconTwitter from '../../assets/iconTwitterwhite.png';
import iconYT from '../../assets/iconYouTubewhite.png';
import { Link } from 'react-router-dom';

const Navbar= () =>{
return (
<div className="navbar">
<div className="logo-navbar">
<img src={logoNavbar} alt='Kira Karamel Project' />
</div>

<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/faq">FAQ</Link></li>
    <li><Link to="/shop">Shop</Link></li>
    <li><Link to="/streamers">Streamers</Link></li>
</ul>
<ul>
    <li><img src={iconTwitter} className="icon"/></li>
    <li><img src={iconYT} className="icon"/></li>
    <li><img src={icon3} className="icon"/></li>
</ul>
</div>
);
};

export default Navbar;