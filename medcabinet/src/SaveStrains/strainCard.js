import React from 'react';

const strainCard = props => {
  const { strain_name, flavor_profile, strain_efects, strain_type } = props.strain;
  return (
    <div className="strain-card">
      <h2>{title}</h2>
      <div className="flavor_profile">
        Flavor Profile: <em>{flavor_profile}</em>
      </div>
      <div className="strain_effects">
        Strain Effects: <strong>{strain_effects}</strong>
      </div>
      <div className="strain_type">
        Strain Type: <strong>{strain_type}</strong>
      </div>>

    </div>
  );
};

export default strainCard;
