import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="position-absolute top-50 start-50">
                <img src={loading} alt="loading" />
            </div>
        )
    }
}

export default Spinner
