import { useState, useEffect } from 'react';
import InitialData from './InitialData.jsx';
import CharacterCard from './CharacterIcon.jsx';
import './App.css'

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
      <ol>
        {(charaDetailsArr !== null) ?
          memoryGameArr.map((card) => {
          return <li key={card.name}> <CharacterCard characterName={card.name} /></li>
        })
        : '' }
      </ol>
    </div>
  )
}

export default App
