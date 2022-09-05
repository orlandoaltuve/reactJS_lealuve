 import CartWidget from '../CartWidget/CartWidget'
import './NavBar.scss'
import { Link } from 'react-router-dom'

const NavBar = () => {
    
    return (
        <div className="navbar-container">
            <Link to="/" className='navbar-tittle'>LEALUVE</Link>
            <nav className='navbar'>
                <Link to="/" className='navbar-link'> Inicio</Link>
                <Link to="/productos/bandoleras" className='navbar-link'> Bandoleras</Link>
                <Link to="/productos/riñoneras" className='navbar-link'> Riñoneras</Link>
                <Link to="/productos/mochilas" className='navbar-link'> Mochilas</Link>
                {/* <a className='navbar-link'> Preguntas Frecuentes</a> */}
            </nav>
            <CartWidget/>
        </div>
    )
}
export default NavBar
