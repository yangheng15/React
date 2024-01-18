import React, { Component } from 'react';
/**
 * 子组件通过父组件children形式被包裹，但是这样有个缺点是父组件不能传值给子组件
 */
export default class LogWrapper extends Component {
    constructor(props) {
        super(props);
        this.cmp = this.props.children;
    }

    componentDidMount() {
        console.log(`${this.cmp.type.name}组件挂载`);
    }

    componentWillUnmount() {
        console.log(`${this.cmp.type.name}组件卸载`);
    }

    render() {
        return this.cmp;
    }
}
