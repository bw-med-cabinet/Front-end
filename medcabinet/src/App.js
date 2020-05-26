import React from 'react';
import {Route, Switch} from 'react-router-dom'
import initialValues from './components/formValues'
import Header from './components/header'
import Registration from './components/register'
import formSchema from './validation/formSchema'
import './App.css';
import { useState, useEffect } from 'react';
import * as yup from 'yup'

function App() {
  const [registerVals, setRegisterVals] = useState(initialValues.registration)
  const [registerErrs, setRegisterErrs] = useState(initialValues.registration)
  const [disabled, setDisabled] = useState(true)

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

  }

  useEffect(() => {
    formSchema.isValid(registerVals)
    .then(valid => {
      setDisabled(!valid)
    })
  }, [registerVals])
  return (
    <div>
      <Header/>

      <Switch>
        <Route path='/register'>
          <Registration values={registerVals} onInputChange={onInputChange} errors={registerErrs} disabled={disabled}/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
