import React, { useState, useEffect } from "react";

const Input = ({ fetching, setSearching }) => {
  const [value, setValue] = useState("Enter Game");
  const [data, setData] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    setSearching(true);
    let obj = await fetching(`games/${value}`);
    console.log(obj);
    setData(obj);
    setValue("");
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

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
