import React from 'react';
import {Route, Switch} from 'react-router-dom'
import initialValues from './components/formValues'
import Header from './components/header'
import Registration from './components/register'
import Login from './components/login'
import formSchema from './validation/formSchema'
import CardContainer from './components/strainCardContainer'
import dummyData from './dummyData'
import StrainCard from './components/strainCard'
import strainFilterForm from './components/strainFilter'
import './App.css';
import { useState, useEffect } from 'react';
import * as yup from 'yup'
import StrainFilterForm from './components/strainFilter';

function App() {
  const [registerVals, setRegisterVals] = useState(initialValues.registration)
  const [registerErrs, setRegisterErrs] = useState(initialValues.registration)
  const [disabled, setDisabled] = useState(true)
  const [strains, setStrains] = useState(dummyData)
  const [filterVals, setFilterVals] = useState(initialValues.filterForm)

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup.reach(formSchema, name)
    .validate(value)
    .then(valid => {
      setRegisterErrs({
        ...registerErrs,
        [name]: ''
      })
    })
    .catch(err => {
      setRegisterErrs({
        ...registerErrs,
        [name]: err.errors[0]
      })
    })

    setRegisterVals({
      ...registerVals,
      [name]: value
    })

    setFilterVals({
      ...filterVals,
      [name]: value
    })

  }

  useEffect(() => {
    formSchema.isValid(registerVals)
    .then(valid => {
      setDisabled(!valid)
    })
  }, [registerVals])

  useEffect(() => {
    if(filterVals.category === 'type'){
    document.getElementById('type').classList.remove('hidden')
    document.getElementById('medicinal').classList.add('hidden')
    } else if (filterVals.category === 'medicinal'){
    document.getElementById('medicinal').classList.remove('hidden')
    document.getElementById('type').classList.add('hidden')
    } else if (!filterVals.category){
    document.getElementById('type').classList.add('hidden')
    document.getElementById('medicinal').classList.add('hidden')
    }
  },[filterVals.category])


  
  return (
    <div>
      <Header/>

      <Switch>
        <Route path='/register'>
          <Registration values={registerVals} onInputChange={onInputChange} errors={registerErrs} disabled={disabled}/>
        </Route>

        <Route path='/login'>
          <Login/>
        </Route>

        <Route path='/strains'>
          <StrainFilterForm values={filterVals} onInputChange={onInputChange}/>
          <CardContainer strains={strains} setStrains={setStrains} filterVals={filterVals}/>
        </Route>


      </Switch>
    </div>
  );
}

export default App;
