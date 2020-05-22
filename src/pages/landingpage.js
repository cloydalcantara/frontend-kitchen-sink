import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class LandingPage extends Component {
    
    render() {
        return (
            <div>  
                HOME
                <ul>
                    <Link to="/admin"><li>ADMIN</li></Link>
                </ul>
            </div>
        );
    }
}

export default LandingPage;