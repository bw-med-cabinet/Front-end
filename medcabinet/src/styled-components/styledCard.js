import styled from 'styled-components'


const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25%;
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
        border-radius: 0 0 9px 9px;
        margin-bottom: -1px;
    }
`

export default StyledCard