import React from 'react'
import StyledCard from '../styled-components/styledCard'

function imageSelector(type) {
   return require(`../images/${type.toLowerCase()}.jpg`)
}

function StrainCard(props) {
    const{strain, addToSavedList} = props
    const saveStrain= () => {
        addToSavedList(strain)
    }

    return(
    <StyledCard>
        <h3>{strain.strain}</h3>
        <img src={imageSelector(strain.type)} alt={strain.type}/>
        <p>{strain.description}</p>
        <div className='save' onClick={saveStrain}>
        save
        </div>
    </StyledCard>
    )
}

export default StrainCard



