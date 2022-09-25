import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext';
import "./CartWidget.scss"

const CartWidget = () => {

    const { cartQuantity,cart } = useContext(CartContext)
    return (
        <div >
            <Link to='/cart' className={`resaltar cartWidget-container ${cart.length>0 ? "widget-visible" :""}`}>
                <Icon icon="bi:cart" color="#7b3c30" height="38" />
                <p >{cartQuantity()}</p>
            </Link >
        </div>
    )
}

export default CartWidget