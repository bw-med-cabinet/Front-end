import React from 'react'
import FilterForm from '../styled-components/filterForm'


function StrainFilterForm(props){
    const {values, onInputChange} = props
 

    return (
        <FilterForm>
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
                    <option value='sativa'>Sativa</option>
                    <option value='indica'>Indica</option>
                    <option value='hybrid'>Hybrid</option>
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
                    <option value=''>--Select an option--</option>
                    <option value='ailment_1'>Insomnia</option>
                    <option value='ailment_2'>Anxiety</option>
                    <option value='ailment_3'>Pain Management</option>
                    <option value='ailment_4'>Appetite Stimulation</option>
                </select>
            </label>
        </FilterForm>
    )
}

export default StrainFilterForm


    