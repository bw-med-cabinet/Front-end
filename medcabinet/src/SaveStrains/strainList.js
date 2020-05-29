import React from "react";
import { Link } from "react-router-dom";
import strainCard from "./strainCard";

function strainList({ strains }) {
  return (
    <div className="strain-list">
      {
        strains.map(strain => (
          <Link key={strain.id} to={`/strains/${strain.id}`}>
            <strainCard strain={strain} />
          </Link>
        ))
      }
    </div>
  );
}

export default strainList;