# Refs are used for accesing doom elements and persistent values across render without causing a rerender.
## useMemo

- useMemo is a React hook that memoizes the 
result of a function, recomputing it only when its dependencies change.
This helps in optimizing performance by preventing unnecessary recalculations.
- for slow functions and referencial equality

## useCallback

- useCallback is a React hook that memoizes a callback function, recreating it only when its dependencies change.
This is useful to avoid unnecessary re-renders when passing callbacks to child components.
- for referencial equality

## useRef
- useRef is a React hook that returns a mutable ref object. This object persists for the full lifetime of the component.
It is commonly used to access DOM elements directly or to keep a mutable variable that does not trigger a re-render when changed. 

## useId 
- gives random id everytime you rerender the page, if the page renders the same as before than it will be the same id everytime
