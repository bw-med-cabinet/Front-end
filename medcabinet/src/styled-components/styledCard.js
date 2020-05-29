import styled from 'styled-components'


const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: center;
    width: 20%;
    text-align: center;
    background: #29E05B;
    border:1px solid #34CC5C;
    border-radius: 10px;
    margin: 4%;
    color: white;
    box-shadow: 0px 1px 2px 0px #29E05B;

    
    
    h3{
        width: 100%;
        font-size: 1.6rem;
        margin: 0;
    }
    img{
        width: 100%;
        margin: 0;
    }
    p{
        font-size:1.4rem;
        color: #042c0f;
        background: #ecfff1;
        margin: 0 1%;
        border-radius: 0 0 10px 10px;
        height: 18vh;
        overflow: scroll;
        &::-webkit-scrollbar-thumb{
            -webkit-appearance: none;
            background-color: blue;
        }
        
    }
    .save{
        font-size: 1.8rem;
        width: 70%;
        &:hover{
            cursor: pointer;
        }
    }
    
`

export default StyledCard