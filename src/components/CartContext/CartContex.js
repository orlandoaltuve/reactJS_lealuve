import { createContext, useState } from "react";
import Swal from 'sweetalert2'

export const CartContex = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }
    const isInCart = (id) => {
        return cart.some((item) => item.id === (id))
    }
    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const removeItem =(id)=>{
        setCart(cart.filter((item)=>item.id !==id))
    }

    const cartTotal =()=>{
        return cart.reduce((acc,item)=>acc + item.cantidad*item.precio, 0)
    }
    const emptyCart=()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
        
    }
    return (
        <CartContex.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem,
        }
        }>
            {children}

        </CartContex.Provider>
    )
}