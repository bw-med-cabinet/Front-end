import React from 'react'
import StyledCard from '../styled-components/styledCard'

function imageSelector(type) {
   return require(`../images/${type}.jpg`)
}

function StrainCard(props) {
    const{strain} = props
    return(
    <StyledCard>
        <h3>{strain.strain_name}</h3>
        <img src={imageSelector(strain.strain_type)} alt={strain.strain_type}/>

    </StyledCard>
    )
}

export default StrainCard