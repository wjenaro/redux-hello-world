import React, { useState } from 'react';
import './style.css'; // Import CSS file
// import { useState } from 'react'; // No need to import useState again, already imported above

export default function App() {
  // State: a counter value
  const [counter, setCounter] = useState(100);

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 102);
  };

  // View: the UI definition
  return (
    <div className="app-container"> {/* Apply a class name for styling */}
      <p>Value: {counter}</p> {/* Changed 'Value' to 'p' tag for better semantics */}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
