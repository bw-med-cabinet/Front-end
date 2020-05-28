import styled from 'styled-components'

const StyledHeader = styled.header`
    border-bottom: 2px solid #29E05B;
    display: flex;
    justify-content: space-between;
    align-content: center;
    background: white;

    a{
        width: 25%;
        height: auto;
        margin: 2%;

        .logo{
            width: 100%;
            
        }
    }

    

    .headerLinks{
        margin: 2%;
        width: 25%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a{
        text-decoration: none;
        color: #34CC5C;
        font-size: 2.5rem;
    }
    }
   
`

export default StyledHeader