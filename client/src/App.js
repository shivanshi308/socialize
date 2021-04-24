import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import {Chat} from './Components/Chat/Chat'
import {Join} from './Components/Join/Join'


const App = () => (
    <Router>
        <Route path='/' exact component={Join} />   
        <Route path='/Chat' component={Chat} />
    </Router>
)

export default App

