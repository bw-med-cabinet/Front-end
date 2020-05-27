import React from 'react'
import FlexDiv from '../styled-components/flexDiv'
import StrainCard from './strainCard'
import dummyData from '../dummyData'

function CardContainer(props){
    const {strains, setStrains, filterVals} = props

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
            }
        })
        
        //     if(!filterVals.type){
        //         return strains
        //     } else {
        //         filteredStrains = strains.map(strain => {
        //             if (strain.strain_type === filterVals.type){
        //                 debugger
        //                 return strain
        //             }
        //         })
        //         console.log(filteredStrains)
        //         return filteredStrains
        //     }
        // }else if (filterVals.category === 'medicinal'){
        //     if(!filterVals.medicinal){
        //         return strains
        //     } else {
        //         filteredStrains = strains.filter(strain => {
        //             if (strain.medicinal === filterVals.medicinal){
        //                 return strain
        //             }
        //         })
        //         return filteredStrains
        //     }
        // }
    }

    return(
        <FlexDiv>
            <h1>Suggested Strains</h1>
            <div>
            {filterStrains(strains).map(strain => {
                return (
                <StrainCard strain={strain} key={strain.strain_id}/>
                )
            })}
            </div>
        </FlexDiv>
    )
}

export default CardContainer