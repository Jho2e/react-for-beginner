import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("only once");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 3) {
      console.log("search for", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("click change");
  }, [counter]);
  useEffect(() => {
    console.log("or");
  }, [counter, keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
