import React, {Component} from 'react';
import {renderVueApp} from './VueApp';
import './react.css';

export default class ReactApp extends Component {

    componentDidMount() {
        renderVueApp(this.container);
    }

    render() {
        return (
            <div>
                <h2 className="react-title">Hello from react!</h2>
                <div id="vue-container" ref={(element => this.container = element)}/>
            </div>
        );
    }
}
