import { ContactlessOutlined } from '@material-ui/icons';
import React, { Component } from 'react';
import Header from '../components/header'
import SearchBox from '../components/search'
import {useState } from 'react'


const HeaderContainer = () => {

    const [filterState, setfilterState]=useState(false);

    const toggleManage=()=>{
        var value= !filterState;
        setfilterState(value);
      }

    const data =[
        {key:1,title:"selection1"},
        {key:2,title:"selection2"},
        {key:2,title:"selection3"},
        {key:4,title:"selection4"}
    ]
    const SearchHandler=(event)=>{
        event.preventDefault();
        ContactlessOutlined.log("search clicked");
    }
    return ( 
        <Header>
        
            <Header.Title>Choose the best for you! </Header.Title>
            <Header.SubTitle>Share your experience</Header.SubTitle>
            <Header.RequestButton>Request</Header.RequestButton>
            <SearchBox searchHandle={SearchHandler}></SearchBox>
            <Header.Filters>
                 <Header.FilterToggle toggleManage={toggleManage}></Header.FilterToggle>
                 <Header.FilterWrap state={filterState}>
                   
                    <Header.Filter title={"Liquor Type"} data={data}></Header.Filter>
                    <Header.Filter title={"Manufacturer"} data={data}></Header.Filter>
                    <Header.Filter title={"Percentage"} data={data}></Header.Filter>
                    <Header.Filter title={"Order By"} data={data}></Header.Filter>
                </Header.FilterWrap>
                <Header.SearchButton state={filterState}>Go</Header.SearchButton>
            </Header.Filters>
        </Header>
     );
}
 
export default HeaderContainer;