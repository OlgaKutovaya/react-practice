import React, {Component} from 'react';

class InnerBox extends Component {
    render() {
        return (
            <div className='inner-box'>
                <h3>Inner box</h3>
                <button onClick={this.props.onChangeTitle}>
                    change title in parent component
                </button>
            </div>
        );
    }
}

export default InnerBox;