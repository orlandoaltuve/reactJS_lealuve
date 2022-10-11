import React from 'react'
import { Icon } from '@iconify/react';
import "./Footer.scss"
import NavFooter from '../NavFooter/NavFooter';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='redes'>
                <a href='https://www.instagram.com/lealuve_shop/' target={"_blank"} rel="noreferrer"><Icon className='iconRedes' icon="ant-design:instagram-outlined" /></a>
                <a href='https://www.facebook.com/lealuve.ar' target={"_blank"} rel="noreferrer"><Icon className='iconRedes' icon="bxl:facebook" /></a>
            </div>
            <div>
                <NavFooter/>
            </div>
            <div>
                <p className='footerParrafo'>© Copyright Lealuve - Accesorios de Indumentaria - 2022 Todos los derechos reservados.</p>
            </div>

        </div>
    )
}

export default Footer