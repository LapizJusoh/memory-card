import { useState, useEffect } from 'react';
import InitialData from './InitialData.jsx';
import CharacterCard from './CharacterIcon.jsx';
import './App.css';

function App() {

  let [charaDetailsArr, setCharaDetailsArr] = useState(null);

  useEffect(() => {
    InitialData().then(r => setCharaDetailsArr(r));

    return () => {}
  }, [])

  let memoryGameArr = [];

  if (charaDetailsArr !== null) {
    for(let i = 0; i < 10; i++) {
      memoryGameArr.push(charaDetailsArr[i]);
    }
  }

  return (
    <div>
      <ul>
        {(charaDetailsArr !== null) ?
          memoryGameArr.map((card) => {
          return <li key={card.name}> <CharacterCard characterId={card.id} /></li>
        })
        : '' }
      </ul>
    </div>
  )
}

export default App
