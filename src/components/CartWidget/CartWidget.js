import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContex } from '../CartContext/CartContex';


const CartWidget = () => {

    const{cartQuantity}=useContext(CartContex)
        return(
            
            <Link to='/cart'>
            <Icon icon="bi:cart" color="#7b3c30" height="35" />
            <span>{cartQuantity()}</span>
            </Link >
        )
}

export default CartWidget