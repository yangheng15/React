import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);
    console.log('render');

    return (
        <>
            <button
                onClick={async () => {
                    /**
                     * 如果想每次减少两次，但是由于这里发生了异步，两次setCount进行合并更新，只render一次，所以此二次count还是没有更新后得值，所以点击后只会减少一个值
                     */
                    // setCount(count - 1); // 不会立刻改变，事件运行完成之后一起改变
                    // setCount(count - 1); // 此时count值和上面的count是一样的
                    await Promise.resolve();
                    setCount((count) => count + 1);
                    console.log(count);

                    setCount(count - 1);
                }}
            >
                -
            </button>
            <h1>{count}</h1>

            <button
                onClick={() => {
                    /**
                     * 如何解决？
                     * 传入一个函数，函数的参数为更新后的值，在事件完成之后统一运行，并且这两次setCount仍然是合并的
                     */
                    setCount(count + 1);
                    setCount((count) => count + 1);
                }}
            >
                +
            </button>
        </>
    );
}
export default App;
