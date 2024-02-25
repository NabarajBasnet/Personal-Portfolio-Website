import { useState } from 'react'
import './Navbar.css'
import {Link, NavLink} from 'react-router-dom'



const Navbar = ()=>
{
    const[menuOpen, setMenuOpen] = useState(false);
    console.log(menuOpen)
    return(
        <>
        <nav className="maincontainer">
            <div className="nav-container-1">
                <div className="container-1-1">
                    <div className="logo">
                        <p>Nabaraj</p>
                    </div>          

                    <div className="pages">
                        <ul className={menuOpen?'open':''}>
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/about'}>About</NavLink></li>
                            <li><NavLink to={'/portfolio'}>Portfolio</NavLink></li>
                            <li><NavLink to={'/services'}>Services</NavLink></li>
                            <li><NavLink to={'/contact'}>Contact</NavLink></li>
                        </ul>
                    </div>


                </div>

                <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
                    {menuOpen?(
                        <img src='../../../../public/images/icons/arrowup.png' width={30}/>
                    ):(
                        <img src='../../../../public/images/icons/arrowdown.png' width={30}/>
                    )}
                </div>

            </div>
        </nav>
        </>
    )
}



export {Navbar};

