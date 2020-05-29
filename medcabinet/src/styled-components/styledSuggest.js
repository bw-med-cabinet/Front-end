import styled from 'styled-components'

const Suggest = styled.div`
    width: 90%;
    margin: 0 5%;
    border: 1px solid #34CC5C;
    border-radius: 0 0 10px 10px;
    box-shadow: 0px 1px 2px 0px #29E05B;
    background: white;

    .cards{
        display: flex;
        flex-flow: wrap;
        justify-content: space-around;

        div{
            width: 20%;
            margin: 4%;
        }
    }

`
export default Suggest