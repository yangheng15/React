import React, { useEffect, useRef, useState } from 'react';
function App() {
    const inputRef = React.createRef<HTMLInputElement>();
    const [n, setN] = useState<string>();
    return (
        <div>
            {n}
            <input
                type="text"
                ref={inputRef}
                onChange={() => {
                    console.log(inputRef.current?.value);
                    setN(inputRef.current?.value);
                }}
            />
        </div>
    );
}
export default App;

