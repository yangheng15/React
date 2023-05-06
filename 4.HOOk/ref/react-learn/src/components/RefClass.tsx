import React, { Component } from 'react';

export default class RefClass extends Component {
    objRef: React.RefObject<HTMLInputElement>;
    funRef: HTMLInputElement | null = null;

    constructor(props: any) {
        super(props);
        this.objRef = React.createRef();
    }

    render() {
        return (
            <div>
                {/* 字符串ref react官方已废弃 */}
                <input type="text" ref="inputRef" />
                <button
                    onClick={() => {
                        console.log(this.refs.inputRef);
                    }}
                >
                    获取输入框ref
                </button>

                {/* 对象 ref */}
                <input type="text" ref={this.objRef} />
                <button
                    onClick={() => {
                        console.log(this.objRef);
                    }}
                >
                    获取输入框ref
                </button>

                {/* 函数 ref */}
                <input
                    type="text"
                    ref={(el) => {
                        console.log(el, '函数ref');
                        this.funRef = el;
                        // 如果函数每次更新时引用都不同，在组建更新的时候调用两次，如果希望只调用一次请声明实例方法
                    }}
                />
                <button
                    onClick={() => {
                        this.setState({});
                    }}
                >
                    render
                </button>
            </div>
        );
    }
}
