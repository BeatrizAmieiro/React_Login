import './App.css'
import React from 'react'

import Card from './pages/layout/Card'
import Login from './pages/Login'

export default (props) => (
   <div className="App">
      <Card titulo="LOGIN">
         <Login />
      </Card>
   </div>
)