import React, { Component } from 'react';
import './Ball.css';

export default class Ball extends Component {
    static defaultProps = {
        left: 0,
        top: 0,
        bg: 'red',
        xSpeed: 0,
        ySpeed: 0,
    };

    constructor(props) {
        super(props);
        this.state = {
            left: props.left,
            top: props.top,
            bg: props.bg,
            xSpeed: props.xSpeed,
            ySpeed: props.ySpeed,
        };
        const duration = 16; // 单位毫秒
        setInterval(() => {
            const xDis = this.state.xSpeed * (duration / 1000);
            const yDis = this.state.ySpeed * (duration / 1000);
            let newLeft = this.state.left + xDis;
            let newTop = this.state.top + yDis;
            if (newLeft > document.documentElement.clientWidth - 100) {
                newLeft = document.documentElement.clientWidth - 100;
                this.setState({
                    xSpeed: -this.state.xSpeed,
                });
            } else if (newLeft < 0) {
                newLeft = 0;
                this.setState({
                    xSpeed: -this.state.xSpeed,
                });
            }

            if (newTop > document.documentElement.clientHeight - 100) {
                newTop = document.documentElement.clientHeight - 100;
                this.setState({
                    ySpeed: -this.state.ySpeed,
                });
            } else if (newTop < 0) {
                newTop = 0;
                this.setState({
                    ySpeed: -this.state.ySpeed,
                });
            }
            this.setState({
                left: newLeft,
                top: newTop,
            });
        }, duration);
    }

    render() {
        const { left, top, bg } = this.state;
        return (
            <div
                className="ball"
                style={{
                    left,
                    top,
                    background: bg,
                }}
            ></div>
        );
    }
}
