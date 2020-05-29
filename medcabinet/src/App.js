import React, { useState, useEffect } from 'react'
import {Route, Switch} from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import Header from './components/header'
import Dashbaord from './components/dashboard'
import Registration from './components/register'
import Login from './components/login'
import formSchema from './validation/formSchema'
import CardContainer from './components/strainCardContainer'
import SavedList from './components/savedList'
import dummyData from './dummyData'
import initialValues from './components/formValues'
import './App.css';

function App() {
  const [registerVals, setRegisterVals] = useState(initialValues.registration)
  const [registerErrs, setRegisterErrs] = useState(initialValues.registration)
  const [disabled, setDisabled] = useState(true)
  const [strains, setStrains] = useState(dummyData)
  const [filterVals, setFilterVals] = useState(initialValues.filterForm)
  const [loginVals, setLoginVals] = useState(initialValues.userForm)
  const [savedList, setSavedList] = useState([])

  const addToSavedList = strains => {
    setSavedList([...savedList, strains])
  }

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

    setLoginVals({
      ...loginVals,
      [name]: value
    })

    setFilterVals({
      ...filterVals,
      [name]: value
    })

  }

  const getStrains = ()=>{
    axios.get('https://marijuana-api.herokuapp.com/api/strains')
      .then(res=>{
        setStrains(res.data)
        console.log(res.data)
      })
      .catch(err=>{
        debugger
      })
  }

  const addUser = newUser => {
    axios.post('https://marijuana-api.herokuapp.com/api/auth/register', newUser)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
          debugger
      })
      .finally(() => {
          setRegisterVals(initialValues.userForm)
      })
    }

  useEffect(() => {
    formSchema.isValid(registerVals)
    .then(valid => {
      setDisabled(!valid)
    })
  }, [registerVals])

  useEffect(() => {
    let type = document.getElementById('type')
    let medicinal = document.getElementById('medicinal')

    if (!type && !medicinal){
      return 
    }else{
    if(filterVals.category === 'type'){
      type.classList.remove('hidden')
      medicinal.classList.add('hidden')
    } else if (filterVals.category === 'medicinal'){
      medicinal.classList.remove('hidden')
      type.classList.add('hidden')
    } else if (!filterVals.category){
      type.classList.add('hidden')
      medicinal.classList.add('hidden')
    }
  }
  },[filterVals.category])

  // useEffect(()=>{
  //   getStrains()
  // },[])
  
  return (
    <div>
      <Header/>

      <Switch>

        <Route exact path='/'>
          <Dashbaord savedList={savedList} strains={strains}/>
        </Route>

        <Route path='/register'>
          <Registration values={registerVals} onInputChange={onInputChange} errors={registerErrs} disabled={disabled} addUser={addUser}/>
        </Route>

        <Route path='/login'>
          <Login values={loginVals}/>
        </Route>

        <Route path='/strains'>
          <CardContainer strains={strains} setStrains={setStrains} filterVals={filterVals} onInputChange={onInputChange} addToSavedList={addToSavedList}/>
        </Route>

      </Switch>
    </div>
  );
}

export default App
