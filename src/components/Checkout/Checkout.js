import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useCartContext } from '../CartContext/CartContext';
import { addDoc, collection, getDocs, writeBatch, query,where,documentId } from 'firebase/firestore';
import { db } from '../../firebase/config';
import "./Checkout.scss"

const Checkout = () => {

    


    const {cart,cartTotal,terminarCompra}=useCartContext()

    const [values, setValues] = useState({
        nombre: "",
        email: "",
        telefono:"",
        direccion: ""
    })

    const orden = {
        comprador: values,
        items:cart,
        total:cartTotal(),
        fecha:new Date().toString()

    }

  

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const batch= writeBatch(db)
        const ordenesRef= collection(db,"ordenes")
        const productosRef= collection(db, "productos")
        const q= query(productosRef, where(documentId(),"in",cart.map(item=>item.id)))
        const productos = await getDocs(q)
        const outOfStock=[]
        
        productos.docs.forEach((doc)=>{
            const itemInCart= cart.find(item=>item.id===doc.id)
            if(doc.data().stock>=itemInCart.cantidad){
                batch.update(doc.ref,{
                    stock: doc.data().stock-itemInCart.cantidad
                })
            }else{
                outOfStock.push(itemInCart)
            }
        })
        if(outOfStock.length===0){
            batch.commit()
                .then(()=>{
                    addDoc(ordenesRef,orden)
                        .then((doc)=>{
                            terminarCompra(doc.id)
                    })

                })
        }else{
            alert("Hay items sin stock")
        } 

    }

    if(cart.length === 0){
        return <Navigate to="/"/>
    }
    return (
        <div>
            <h2 className='titulo'>Checkout</h2>

            <form onSubmit={handleSubmit} className="formulario">
                <input
                    name='nombre'
                    onChange={handleInputChange}
                    type={"text"}
                    required
                    value={values.nombre}
                    placeholder="Nombre"></input>
                <input
                    name='email'
                    onChange={handleInputChange}
                    type={"email"}
                    required
                    value={values.email}
                    placeholder="Email"></input>
                <input
                    name='telefono'
                    onChange={handleInputChange}
                    type={"text"}
                    required
                    value={values.telefono}
                    placeholder="Tel??fono"></input>
                <input
                    name='direccion'
                    onChange={handleInputChange}
                    type={"text"}
                    required
                    value={values.direccion}
                    placeholder="Direcci??n"></input>
                <button type='submit' className='btn1'>Enviar</button>

            </form>
        </div>
    )
}

export default Checkout