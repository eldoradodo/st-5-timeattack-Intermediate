import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import {add, substract } from "

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {

   const [inputValue, setInputValue] = useState(0);
   const result = useSelector((state) => state.result);
   const dispatch = useDispatch();

  const add = () => {
    dispatch(add((Number(inputValue)));
    setInputValue(0);
  };

  const sub = () => {
    dispatch({
      
    });
  }

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input 
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value}
        /> 
        만큼을 
        <button onClick={add}>
          더할게요
          </button> 
          <button onClick={sub}>
            뺄게요
            </button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{}</p>
      </div>
    </div>
  );
}

export default App;
