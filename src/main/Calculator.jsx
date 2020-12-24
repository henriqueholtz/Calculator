import './Calculator.css';
import React, { Component } from 'react';
import Button from '../components/Button';
import Display from '../components/Display';

export default class Calculator extends Component {

    constructor(props) {
        super(props);

        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory() {
        console.log('clear');
    }

    setOperation(operation) {
        console.log(operation);
    }

    addDigit(n) {
        console.log(n);
    }

    render() {
        const setOperation = op => this.setOperation(op);

        return (
            <div className="calculator">
                <Display value={100} />
                <Button label="AC" click={() => this.clearMemory()} triple />
                <Button label="/" click={setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={setOperation} operation />
            </div>
        );
    }
};