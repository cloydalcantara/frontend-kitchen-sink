import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/index'

class App extends Component {
    render() {
        // TODO: check token validation and api communication here
        return (
            
                <Router>
                	<div>
                        <Routes />
                    </div>
                </Router>
           
        )
    }
}

render(<App />, document.getElementById('root'));