import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContex } from '../CartContext/CartContex';
import "./CartWidget.scss"

const CartWidget = () => {

    const { cartQuantity } = useContext(CartContex)
    return (
        <div >
            <Link to='/cart' className='resaltar cartWidget-container'>
                <Icon icon="bi:cart" color="#7b3c30" height="38" />
                <p >{cartQuantity()}</p>
            </Link >
        </div>
    )
}

export default CartWidget