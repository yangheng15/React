import React, { useEffect, useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(count + 1);
        console.log(count); // 0
    }, []);

    console.log('render');

    return <>{count}</>;
}
export default App;
