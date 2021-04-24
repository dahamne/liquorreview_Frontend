import React, { Component,useEffect,useState,createContext, useContext } from 'react';
import {HeaderContainer,FilterWrapper,Title,SubTitle,ButtonReq,Wrap,SearchDark} from './styles/style'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './styles/styles.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronCircleDown} from '@fortawesome/free-solid-svg-icons'

const WindowWidthContext=createContext()

const Header = ({children}) => {
    //width of the winow is required to render the toggle button.
    const [width,setWidth]=useState(window.innerWidth);
    useEffect(() => {   
        window.addEventListener('resize',()=>{ setWidth(window.innerWidth)});
      })


    return ( 
        <WindowWidthContext.Provider value={{width}}>
            <HeaderContainer>{children}</HeaderContainer>
        </WindowWidthContext.Provider>
        
     );
}
 
export default Header;


Header.Filters=({children})=>{
    return (
        <FilterWrapper>{children}</FilterWrapper>
    )
}

Header.Title=({children})=>{
    return(
        <Title>{children}</Title>
    )
}

Header.SubTitle=({children})=>{
    return (
        <SubTitle>{children}</SubTitle>
    )
}

Header.RequestButton=({children})=>{
    return(
        <ButtonReq>{children}</ButtonReq>
    )
}

Header.FilterWrap=({children,state})=>{

    if(state)

    return (
        <Wrap></Wrap>
    )
    else{
        return (
            <Wrap>{children}</Wrap>
        )
    }
  
  
}

Header.Filter=(props)=>{
    return(
        <FormControl >
            <InputLabel id="demo-simple-select-label" >{props.title}</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className="filter"
            >
            {props.data.map(value=>{
                return(
                    <MenuItem value={value.key}>{value.title}</MenuItem>
                 )
            })}
            </Select>
        </FormControl>

    )
}

Header.SearchButton=({children,state})=>{

    if(state)

    return (
        <div></div>
    )

    else{
        
    return (
        <SearchDark>{children}</SearchDark>
    )
    }

}

Header.FilterToggle= function Toggler (props) 

{   
    const {width} = useContext(WindowWidthContext)
    if(width>800){

        return (
            <div></div>
        )
    }
    else{

        return (
            
            <FontAwesomeIcon className="toggler"  onClick={props.toggleManage} icon={faChevronCircleDown} />
            )
    }
   
}