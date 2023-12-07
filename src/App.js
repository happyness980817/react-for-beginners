import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time"); // state 변할 때마다 실행
  useEffect(() => {
    console.log("CALL THE API...");
  },[]); // 코드 한번만 실행
  useEffect(() => {
    if(keyword !== "") {
      console.log("SEARCH FOR", keyword); // keyword 가 빈 값이 아닐때 keyword 검색
    }
  }, [keyword]); // keyword 가 변화할 때만 code 실행

/*  const iRunOnlyOnce = () => {
    console.log("i run only once.");
  };
  useEffect(iRunOnlyOnce, []); 
  
  얘랑 같은 코드*/
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
