import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Admin extends Component {
    
    render() {
        return (
            <div>
                ADMIN
                <ul>
                    <Link to="/"><li>HOME</li></Link>
                </ul>
            </div>
        );
    }
}

export default Admin;