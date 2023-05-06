import React, { useState } from 'react';

function App() {
    const [a, setA] = useState(1);
    const [b, setB] = useState('b');
    console.log('render');

    function handleClickWithPromise() {
        Promise.resolve().then(() => {
            setA(a + 1);
            setB('bb');
        });
    }

    function handleClickWithoutPromise() {
        setA(a + 1);
        setB('bb');
    }

    return (
        <>
            <button onClick={handleClickWithPromise}>
                {a}-{b} 异步执行
            </button>
            <button onClick={handleClickWithoutPromise}>
                {a}-{b} 同步执行
            </button>
        </>
    );
}
export default App;
