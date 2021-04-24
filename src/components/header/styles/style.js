import styled from 'styled-components/macro'

export const FilterWrapper = styled.div`
    width:70%;
    height:8em;
    background-color:#f7f7f7;
    border-radius:0.5em;
    -webkit-box-shadow: 3px 3px 13px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 3px 13px -1px rgba(0,0,0,0.75);
    box-shadow: 3px 3px 13px -1px rgba(0,0,0,0.75);
    position:relative;
    bottom:-40px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:2em;

    transition: 1s;
    

    @media(max-width:1000px){
        width:90%;
        display:flex;
        flex-direction:column;
        height:auto;

        transition:0.5s;
    }

    @media(max-width:800px){
        height:auto;
        min-height:5px;
        padding:1.5rem;;
    }

    


`;

export const HeaderContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-top:4em;
    background: rgb(49,60,74);
    background: radial-gradient(circle, rgba(49,60,74,1) 0%, rgba(35,47,62,1) 100%);
`;


export const Title =styled.h1`
    font-family:'Poppins', sans-serif;
    color:white;
    font-size:4em;
    text-align:center;
    @media(max-width:800px){
        font-size:3em;
        margin:0.3rem;
        margin-top:0;
    }

`;



export const SubTitle=styled.h1`
    font-family:'Poppins', sans-serif;
    color:white;
    font-size:2em;
    text-align:center;
    @media(max-width:800px){
        font-size:1.5em;
        margin:0.3rem;
        margin-top:0;
    }


`;


export const ButtonReq=styled.button`
    border:none;
    padding:0.8em 3em;
    margin:1em;
    border-radius:0.2em;
    color:white;
    background-color:#fbb111;
    &:hover{
        background-color:#f8a300;
    }
  

`;

export const Wrap =styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:90%;
    @media(max-width:800px){
        width:100%;
        flex-direction:column;
        
    }
`;

export const SearchDark=styled.button`
    border:none;
    outline:none;
    width:10%;
    margin-left:0.5rem;
    color:white;
    background-color:#2F2F2F;
    border-radius:0.2rem;
    padding:0.5em 1em;

    @media(max-width:1200px){
        width:30%;
        margin-top:1rem;
    }

`;
