import './NavFooter.scss'
import { Link } from 'react-router-dom'

const NavFooter = () => {
    
    return (
            <nav className='navbarFooter'>
                <Link to="/" className='navbar-link'> Inicio</Link>
                <Link to="/nosotros" className='navbar-link'> Nosotros</Link>
                <Link to="/contacto" className='navbar-link'> Contacto</Link>
                <Link to="/preguntasfrecuentes" className='navbar-link'> Preguntas Frecuentes</Link>
            </nav>
    )
}
export default NavFooter
