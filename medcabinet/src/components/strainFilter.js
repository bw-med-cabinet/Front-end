import React from 'react'



function StrainFilterForm(props){
    const {values, onInputChange} = props
 

    return (
        <form>
            <label>
                Filter By:
                <select 
                name='category'
                value={values.category}
                onChange={onInputChange}
                >
                    <option value=''>--Select Category--</option>
                    <option value='type'>Type</option>
                    <option value='medicinal'>Medicinal Purpose</option>
                </select>
            </label>
            <label id='type' className='hidden'>
                Select Type
                <select
                    name='type'
                    value={values.type}
                    onChange={onInputChange}
                >
                    <option value=''>--Select a Type--</option>
                    <option value='Sativa'>Sativa</option>
                    <option value='Indica'>Indica</option>
                    <option value='Hybrid'>Hybrid</option>
                    <option value='cbd'>CBD</option>
                </select>
            </label>

            <label id='medicinal' className='hidden'>
                Select Medicinal Purpose
                <select
                    name='medicinal'
                    value={values.medicinal}
                    onChange={onInputChange}
                >
                    <option>--Select an option--</option>
                </select>
            </label>
        </form>
    )
}

export default StrainFilterForm


    