import React, { Component } from 'react';
import CheckBoxGroup from './index';

const checkboxArr = [
    {
        value: '1',
        label: '测试',
    },
    {
        value: '2',
        label: '测试2',
    },
    {
        value: '3',
        label: '测试3',
    },
];

export default class test extends Component {
    state = {
        value: ['1'],
    };
    render() {
        return (
            <CheckBoxGroup
                name="test"
                datas={checkboxArr}
                value={this.state.value}
                onChange={(val) => {
                    console.log(val);
                    this.setState({
                        value: val
                    })
                }}
            />
        );
    }
}
