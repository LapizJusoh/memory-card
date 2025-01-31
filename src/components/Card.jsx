import { useState, useEffect } from 'react';
import './Card.css';

export default function Cards() {

  const [initialRender, setInitialRender] = useState(true);
  const [cardsArr, setCardsArr] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const url = `https://genshin.jmp.blue/characters/`;

  useEffect(() => {

    if(initialRender) {
      fetch(url)
      .then(response => response.json())
      .then((data) => {
        let tempArr = [];
        for (let i=0;i<10;i++) {
          tempArr.push( { character: data[i], isClicked: false} );
        };
        setCardsArr([...shuffle(tempArr)])
      }).catch(err => console.log(err));

      setInitialRender(false);
    }
    return () => {};

  },[]);  

  function shuffle(array) {
    let currentIndex = array.length;
    
    while (currentIndex!= 0) {
      let randomIndex = Math.floor(Math.random()*currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  function handleClick(index) {
    let tempArr = cardsArr;

    if (!tempArr[index].isClicked) {
      tempArr[index].isClicked = true;
      setScore(() => score + 1);
      (bestScore< (score+1) ) && setBestScore(() => bestScore + 1);
    } else {
      for(let i=0;i<tempArr.length;i++) tempArr[i].isClicked=false;
      setScore(0);
    };
    
    tempArr = [...shuffle(cardsArr)];
    setCardsArr([...tempArr]);
    // console.log(cardsArr);
  }

  return (
    <div>
      <div className='display'>
        <h4>Get points by clicking on an image but don&apos;t click on any more than once!</h4>
        <p>Score:{score}</p>
        <p>Best Score:{bestScore}</p>
      </div>
      <ul>
        {cardsArr.map((card, index) => {
          return<li
              key={card.character}
              onClick={() => handleClick(index)}><img src={`${url + card.character}/icon`}
            />
            <p>{card.character}</p>
          </li>
        })}
      </ul>
    </div>
  )
}