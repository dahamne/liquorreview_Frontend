import React, { Component } from 'react';
import {FooterWrap} from './styles/style.js'

const Footer = ({children}) => {
    return ( 
        <FooterWrap>{children}</FooterWrap>
     );
}
 
export default Footer;