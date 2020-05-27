import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import axios from 'axios';

function EditStrain({ handleEditCount }){
    const [ newValue, setNewValue ] = useState(null)
    const match = useRouteMatch();
    const history = useHistory();

    useEffect(() => {
        const id = match.params.id;
        axios.get('weedapi')
        .then(res => {
            res.data = {
                ...res.data,
                strain_name: res.data.stars.toString()
            }
            setNewValue(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [match.params.id]);

    const goBack = () => {
        const id = match.params.id;
        history.push(`/strains/${id}`);
    }

    const handleChange = e => {
        setNewValue({
            ...newValue,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        newValue.strain_effects = newValue.strain_effects * 1;
        newValue.strain_type = newValue.strain_type.split(',');

        const id = match.params.id;
        axios.put(`Weed API`, newValue)
        .then(() => {
            handleEditCount();
            history.push(`/strains/${id}`);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <div className='form-wrapper'>
            <div className='back-button' onClick={goBack}>Go Back</div>
            {newValue && (
                <form onSubmit={handleSubmit}>

                    <label>Strain Name</label>
                    <div className="EditInput">
                        <input
                            name='strain name'
                            value={newValue.strain_name}
                            onChange={handleChange}
                        />
                    </div>

                    <label>Flavor Profile</label>
                    <div className="EditInput">
                        <input
                            name='flavor profile'
                            value={newValue.flavor_profile}
                            onChange={handleChange}
                        />
                    </div>

                    <label>Strain Effects</label>
                    <div className="EditInput">
                        <input
                            name='strain effects'
                            value={newValue.strain_effects}
                            onChange={handleChange}
                        />
                    </div>

                    <label>Strain Type</label>
                    <div className="EditInput">
                        <input
                            name='strain type'
                            value={newValue.strain_type}
                            onChange={handleChange}
                        />
                    </div>

                    <input type='submit' value='Submit Changes' className='form-submit'/>
                </form>
            )}
        </div>
    );
}

export default EditStrains; 