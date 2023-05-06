import React from 'react';
import ForwardRef from './components/ForwardRef';
// import ControlCmp from './components/ControlCmp';
// import RefClass from './components/RefClass';
// react 类组件 ref
class App extends React.Component {
    refInput: React.RefObject<HTMLInputElement>;

    constructor(props: any) {
        super(props);
        this.refInput = React.createRef();
    }

    componentDidMount(): void {
        this.refInput.current?.focus()
    }

    render(): React.ReactNode {
        return (
            <div>
                {/* hook中受控组建与非受控组建，ref使用 */}
                {/* <ControlCmp /> */}

                {/* ref可以获取class组件的实例 */}
                {/* <RefClass/> */}

                {/* 转发ref */}
                <ForwardRef ref={this.refInput} />
            </div>
        );
    }
}
export default App;
