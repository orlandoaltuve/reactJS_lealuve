 import CartWidget from '../CartWidget/CartWidget'
import './NavBar.scss'

const NavBar = () => {
    
    return (
        <div className="navbar-container">
            <h2 className='navbar-tittle'>LEALUVE</h2>
            <nav className='navbar'>
                <a className='navbar-link'> Inicio</a>
                <a className='navbar-link'> Productos</a>
                <a className='navbar-link'> Contacto</a>
                <a className='navbar-link'> Nosotros</a>
                <a className='navbar-link'> Preguntas Frecuentes</a>
            </nav>
            <CartWidget/>
        </div>
    )
}
export default NavBar
