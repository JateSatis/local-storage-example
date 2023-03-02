import React, { useState } from "react";

const UserInput = ({ login, logout }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => login(input)}>Log in</button>
      <button
        onClick={() => {
          localStorage.clear();
          logout();
          setInput("");
        }}
      >
        Clear storage
      </button>
    </div>
  );
};

export default UserInput;
