import React, { useState } from "react";

const Input = ({ fetching, setSearching, info }) => {
  const [value, setValue] = useState("Enter Game");
  const [data, setData] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    setSearching(true);
    fetching(`games/${value}`);
    setValue("");
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input
          type="text"
          value={value}
          className="search-button"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Input;
