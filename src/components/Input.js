import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const navigate = useNavigate();
  const queryRef = useRef(null);

  const queryHandler = () => navigate(`/game/${queryRef.current.value}`);

  return (
    <div>
      <form onSubmit={queryHandler}>
        <input
          type="text"
          ref={queryRef}
          placeholder="Enter Game Title"
          className="search-button"
        />
      </form>
    </div>
  );
};

export default Input;
