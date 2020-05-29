import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import StrainCard from './strainCard'
import SavedStrains from '../styled-components/savedStrains'
export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="saved-list">
        <SavedStrains> 
        <h3>Saved Strains</h3><br/>
        <div class='cards'>
        {this.props.list.map(strain => {
          return (
            <NavLink
              to={`/strains/${strain.id}`}
              key={strain.id}
              activeClassName="saved-active"
            >
                {/* <span className="saved-strain">{strain.strain_name}</span> */}
                <StrainCard strain={strain} key={strain.id}/>
            </NavLink>
          );
        })}
        </div>
        </SavedStrains>
        </div>
    );
  }
}