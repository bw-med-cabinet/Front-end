import styled from 'styled-components'

const FilterForm = styled.form`
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;

    label{
        margin-bottom: 1%;
        
        select{
            margin-left: 1%;
            border-radius: 5px;
            border:1px solid #34CC5C;
            background: #34CC5C;
            color: white;
            font-size: 1.6rem;
            box-shadow: 0px 1px 2px 0px #29E05B;
        }
    }
`
export default FilterForm