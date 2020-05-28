import React from 'react'
import SavedList from './savedList'

function Dashboard(props){
    const {savedList, strains} = props 
    return(
      <SavedList list={savedList} strains={strains}/>
    )
}

export default Dashboard