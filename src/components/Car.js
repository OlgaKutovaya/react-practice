import React, {Component} from 'react';

class Car extends Component {
    render() {
        return (
            <div className='car-wrapper'>
                <h4>Car name: {this.props.name}</h4>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input type="text" onChange={this.props.onChangeName}/>
            </div>
        );
    }
}

export default Car;