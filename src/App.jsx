import { useState, useEffect } from 'react';
import InitialData from './InitialData.jsx';
import './App.css'

function App() {

  let [charaDetailsArr, setCharaDetailsArr] = useState([]);

  useEffect(() => {
    InitialData().then(r => setCharaDetailsArr(r));
  }, [])

  function showArr () {
    console.log(charaDetailsArr);
  }

  return (
    <div>
      <button onClick={showArr}>On Click! </button>
    </div>
  )
}

export default App
