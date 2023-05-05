import React, { Component } from 'react';

// export default function WithLog(Cmp) {
//     return class LogWrapper extends Component {
//         componentDidMount() {
//             console.log(`${Cmp.name}组件挂载`);
//         }

//         componentWillUnmount() {
//             console.log(`${Cmp.name}组件卸载`);
//         }

//         render() {
//             return <Cmp />;
//         }
//     };
// }

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
