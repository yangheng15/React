import React, { useState } from 'react';
import MyHeader from './components/Header.jsx';
import WithLog from './HOC/WithLog.jsx';

// const LogWrapper = WithLog(Header);
const test = () => Promise.resolve()
console.log(test());

export default function App() {
    const [visible, setVisible] = useState(true);
    return (
        <div>
            {/* {visible && <LogWrapper />} */}
            {visible && (
                <WithLog>
                    <MyHeader />
                </WithLog>
            )}
            <button
                onClick={() => {
                    setVisible(false);
                }}
            >
                销毁
            </button>
        </div>
    );
}
