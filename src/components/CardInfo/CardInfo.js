import { Icon } from '@iconify/react'
import React from 'react'
import "./CardInfo.scss"

const CardInfo = () => {
    return (
        <div className='cardInfoContainer'>
            <div className='cardI'>
                <Icon className='cardIImg' icon="fa-solid:truck" />
                <p className='pTitulo'>ENVÍOS A TODO EL PAÍS</p>
                <p>Tu compra demora en llegar de 3 a 7 dias hábiles.</p>
            </div>
            <div className='cardI'>
                <Icon className='cardIImg' icon="bi:credit-card-2-back-fill" />
                <p className='pTitulo'>3 CUOTAS SIN INTERÉS</p>
                <p>Con todas las tarjetas de crédito.</p>
            </div>
            <div className='cardI'>
                <Icon className='cardIImg' icon="fa:dollar" />
                <p className='pTitulo'>20% DE DESCUENTO</p>
                <p>Abonando con trasnferencia bancaria.</p>
            </div>
        </div>
    )
}
export default CardInfo