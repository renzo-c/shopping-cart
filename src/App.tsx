import React from 'react';
import "./app.css";

const App = () => {
  console.log(process.env.NODE_ENV);

  return (
    <div>
      <p className="test">Welcome to React!!!</p>
    </div>
  );
};

export default App;
