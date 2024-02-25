import './Footer.css'
import {Link} from 'react-router-dom';



const Footer = ()=>
{
    return(
        <>
        <div className="footer-container">
            <div className="footer-container-1">
                
                <div className="ftcontainer-1">
                    <p>Based in New York, working worldwide</p>
                    <Link to={'/contact'}>Get in touch</Link>
                </div>

                <div className="ftcontainer-2">
                    <div className="social-links">
                        <h5>Social</h5>
                        <ul>
                            <li><a href='#'>Instagram</a></li>
                            <li><a href='#'>Facebook</a></li>
                            <li><a href='#'>Twitter</a></li>
                            <li><a href='#'>Linkedin</a></li>
                        </ul>
                    </div>

                    <div className="services">
                    <h5>Services</h5>
                        <ul>
                            <li>Web Development</li>
                            <li>App Development</li>
                            <li>Ui/Ux Design</li>
                            <li>Graphic Design</li>
                        </ul>
                    </div>
                    
                    <div className="page-link">
                    <h5>Quicklinks</h5>
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><Link to={'/portfolio'}>Portfolio</Link></li>
                            <li><Link to={'/services'}>Services</Link></li>
                            <li><Link to={'/contact'}>Contact</Link></li>
                        </ul>
                    </div>
                    
                </div>

            </div>
        </div>
        </>
    )
}



export {Footer};