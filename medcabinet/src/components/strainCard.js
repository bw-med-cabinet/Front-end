import React from 'react'
import StyledCard from '../styled-components/styledCard'

function imageSelector(type) {
   return require(`../images/${type}.jpg`)
}

function StrainCard(props) {
    const{strain, addToSavedList} = props
    const saveStrain= () => {
        addToSavedList(strain)
        console.log(strain)
    }

    return(
    <StyledCard>
        <h3>{strain.strain_name}</h3>
        <img src={imageSelector(strain.strain_type)} alt={strain.strain_type}/>
        <p>{strain.strain_description}</p>
        <div className='save' onClick={saveStrain}>
        save
        </div>
    </StyledCard>
    )
}

export default StrainCard



