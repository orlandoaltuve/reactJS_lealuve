import React from 'react'
import { useState } from 'react'
import "./Newsletter.scss"

const Newsletter = () => {
    const [values, setValues] = useState({
        email: "",
    })
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
    }
    return (
        <div className='newsletterContainer'>
            <h4>SUSCRIBETE A NUESTRA NEWSLETTER</h4>
            <form onSubmit={handleSubmit} className="formulario">
                <input
                    name='email'
                    onChange={handleInputChange}
                    type={"email"}
                    value={values.email}
                    placeholder="Email"
                    required></input>
                <button type='submit' className='btn1'>Enviar</button>
            </form>
        </div>
    )
}

export default Newsletter