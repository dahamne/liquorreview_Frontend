import React, { Component } from 'react';
import NavBar from '../components/navbar'
import HeaderContainer from '../containers/header'
import FooterContainer from './../containers/footer';
const Home = () => {
    return ( 
        <div>
           <NavBar></NavBar>
           <HeaderContainer></HeaderContainer>
           <FooterContainer></FooterContainer>
        </div>
     );
}
 
export default Home;