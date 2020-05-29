import React from 'react';

const strainCard = props => {
  const { strain, flavor_profile, efects, type } = props.strain;
  return (
    <div className="strain-card">
      <h2>{title}</h2>
      <div className="flavor_profile">
        Flavor Profile: <em>{flavor_profile}</em>
      </div>
      <div className="strain_effects">
        Strain Effects: <strong>{effects}</strong>
      </div>
      <div className="strain_effects">
        Strain Type: <strong>{type}</strong>
      </div>>

    </div>
  );
};

export default strainCard;