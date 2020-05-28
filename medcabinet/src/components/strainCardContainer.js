import React from 'react'
import FlexDiv from '../styled-components/flexDiv'
import StrainCard from './strainCard'
import StrainFilterForm from './strainFilter'
import dummyData from '../dummyData'

function CardContainer(props){
    const {strains, filterVals, onInputChange, addToSavedList} = props
    
    function filterStrains(strains){
        return strains.filter(strain => {
            if(!filterVals.category){
                return strains
            }else if (filterVals.category === 'type'){
                if(!filterVals.type){
                    return strain
                } else if (strain.strain_type === filterVals.type){
                    return strain
                }
            }else if (filterVals.category === 'medicinal'){
                if(!filterVals.medicinal){
                    return strain
                } else if (strain.recommended_for === filterVals.medicinal){
                    return strain
                }
            }
        })
    }

    return(
        <FlexDiv>
            <StrainFilterForm values={filterVals} onInputChange={onInputChange}/>
            <h1>Suggested Strains</h1>
            <div>
            {filterStrains(strains).map(strain => {
                return (
                <StrainCard addToSavedList={addToSavedList} strain={strain} key={strain.strain_id}/>
                )
            })}
            
            </div>
        </FlexDiv>
    )
}

export default CardContainer

