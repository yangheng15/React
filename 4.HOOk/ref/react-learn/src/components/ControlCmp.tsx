// 受控组件与非受控组建

import React, { createRef, useState } from 'react';

function ControlCmp() {
    const [inputVal, setInputVal] = useState('')
    const inputRef = createRef<HTMLInputElement>()
    return (
        <>
            <div>
                {/* 受控组件 */}
                <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => {
                        setInputVal(e.target.value)
                    }}
                />
            </div>
            <div>
                {/* 非受控组件 */}
                <input type="text" ref={inputRef} />
                <button onClick={() => {
                    console.log(inputRef.current?.value);
                    
                }}>获取数据</button>
            </div>
        </>
    );
}

export default ControlCmp;
