import { useEffect, useRef, useState } from 'react';
function App() {
    const [n, setN] = useState(10);
    const nRef = useRef(10);

    useEffect(() => {
        const timer = setInterval(() => {
            nRef.current --;
            setN(nRef.current)
            if(nRef.current === 0) {
                clearInterval(timer);
            }
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <div>
            <h1>{n}</h1>
        </div>
    );
}
export default App;

