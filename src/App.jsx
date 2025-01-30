import { useState, useEffect } from 'react';
import InitialData from './InitialData.jsx';
import CharacterCard from './CharacterIcon.jsx';
import './App.css';

function App() {

  let [charaArr, setCharaArr] = useState([]);
  InitialData().then(r => setCharaArr(r));

  useEffect(() => {
    return () => {}
  }, [charaArr])

  function shuffle() {
    let shuffledArr = charaArr;

    console.log(charaArr);
    for(let currentIndex = charaArr.length-1; currentIndex > 0; currentIndex--) {
      let randomIndex = Math.floor(Math.random()*currentIndex);

      [shuffledArr[currentIndex], shuffledArr[randomIndex]]
      = [shuffledArr[randomIndex], shuffledArr[currentIndex]];
      currentIndex--;
    }

    setCharaArr(shuffledArr);
    console.log(charaArr);
  }

  return (
    <div>
      <div>
        <p>Genshin</p>
      </div>
      <ul>
        {
          charaArr.map((card) => {
          return <li key={card}>
            <CharacterCard
              characterId={card}
              parentFunction={shuffle}
            />
          </li>
          })
        }
      </ul>
    </div>
  )
}

export default App
