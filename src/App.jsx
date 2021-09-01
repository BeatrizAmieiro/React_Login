import './App.css'
import React from 'react'

import Card from './pages/layout/Card'
import Login from './pages/Login'
//import Cadastro from './pages/Cadastro'

export default (props) => (
   <div className="App">
      <Card titulo="LOGIN"> <Login /> </Card>

      {/*<Card titulo="Cadastro"> <Cadastro /> </Card>*/}  
   </div>
)