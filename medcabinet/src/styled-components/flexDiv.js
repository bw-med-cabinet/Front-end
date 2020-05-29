import styled from 'styled-components'

const FlexDiv = styled.div`
    text-align: center;
    color: #34CC5C;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
    margin: 0 5%;

    h1{
        font-size: 3rem;
    }

    div{
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        justify-content: space-around;
    }
`

export default FlexDiv