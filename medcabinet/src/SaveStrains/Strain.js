import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import strainCard from "./strainCard";

function Strain({ addToSavedList, decreaseStraincount }) {
  const [strain, setStrain] = useState(null);
  const params = useParams();
  const history = useHistory();

  const fetchStrain = (id) => {
    axios
      .get(`WeedAPI`)
      .then((res) => setStrain(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveStrain = () => {
    addToSavedList(strain);
  };
  const editStrain = () => {
    history.push(`/update-strain/${params.id}`);
  }

  const deleteStrain = () => {
    const id = params.id;
    axios.delete(`WeedAPI`)
    .then(() => {
      decreaseStrainCount();
      history.push(`/`);
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    fetchStrain(params.id);
  }, [params.id]);

  if (!strain) {
    return <div>Loading strain information...</div>;
  }

  return (
    <div className="save-wrapper">
      <strainCard strain={strain} />
      <button className='delete-button' onClick={deleteStrain}>Delete</button>
      <div className='save-button' onClick={saveStrain}>Save</div>
      <button className='edit-button' onClick={editStrain}>Edit</button>
    </div>
  );
}

export default Strain;