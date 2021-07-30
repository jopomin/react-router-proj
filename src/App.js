import React from 'react'
import './App.css'
import Home from './components/Home'
import Bio from './components/Bio'
import Contacts from './components/Contacts'
import Navbar from './components/Navbar'
import Post from './components/Post'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/bio' component={Bio} />
        <Route exact path='/contacts' component={Contacts} />
        <Route exact path='/:id' component={Post} />
      </div>
    </Router>
  )
}

export default App
