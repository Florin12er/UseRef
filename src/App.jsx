import { useState, useEffect, useRef } from "react";

function App() {
    const [name, setName] = useState("");
    const renderCount = useRef(0);
    const inputRef = useRef();
    const prevName = useRef("");
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });
    function focus() {
        inputRef.current.focus();
    }
    useEffect(() => {
        prevName.current = name;
    }, [name]);

    return (
        <>
            <input
                ref={inputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div>
                My password is {name} and used to be {prevName.current}
            </div>
            <div>I rendered {renderCount.current} times</div>
            <button onClick={focus}>Focus</button>
        </>
    );
}

export default App;
