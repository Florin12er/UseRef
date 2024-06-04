import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useId,
} from "react";

import List from "./List";

function slowFunction(num) {
  for (let i = 0; i <= 1000000; i++) {}
  return num * 2;
}
function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const id = useId();

  const getItems = useCallback(
    (Incremental) => {
      return [
        number + Incremental,
        number + 1 + Incremental,
        number + 2 + Incremental,
      ];
    },
    [number],
  );

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {}, [themeStyles]);

  const [name, setName] = useState("");
  const renderCount = useRef(0);
    const ID = useRef()
  const inputRef = useRef();
  const prevName = useRef("");
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log(ID)
  });
  function focus() {
    inputRef.current.focus();
  }
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Toggle theme
        </button>
        <List getItems={getItems} />
      </div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
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
      <h1 ref={ID} id={id}>Hello</h1>
    </>
  );
}

export default App;
