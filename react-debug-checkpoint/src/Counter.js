import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    // BUG: mistakenly increasing instead of decreasing
    // setCount(count + 1);

    // This line was added after fixing the bug using React Developer Tools by correcting the state update logic
    // Fixed bug: corrected decrease logic using React Developer Tools
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Counter;
