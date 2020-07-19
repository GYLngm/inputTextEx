import React, { useState, useRef } from 'react';
import './App.css';
import $ from 'jquery';

function App() {

  const [myText, setText] = useState('');
  const [result, setResult] = useState(() => {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:8002/inputText/',
      data: {'id': 1},
      dataType: 'json'
    }).done( resData => {
      setResult(resData.myText);
    });  
  });
  const ref = useRef(null);

  const handleClick = () => {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:8002/inputText/update/',
      data: {'id': 1, 'myText': myText},
      dataType: 'json'
    }).done( resData => {
      setResult(resData.myText);
    });
  };

  return (
    <div className="App">
      <input type="text" name="my_text" onChange={ () => setText(ref.current.value) } value={myText} ref={ref} />
      <button onClick={handleClick}>Submit</button>
      <div>
        Text value in Database: {result}
      </div>
    </div>
  );
}

export default App;
