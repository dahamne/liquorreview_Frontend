import React, { Component } from 'react';
import {Form,Col,Button} from 'react-bootstrap'
import './style/styles.css'
const SearchBox = (props) => {
    return ( 
        <Form className="searchWrapper">
            <Form.Control placeholder="Search" className="searchBox"/>
            <Button className="searchButton" variant="warning" onClick={(event)=>props.searchHandle(event)}>Search</Button>
        </Form>
     );
}

export default SearchBox;