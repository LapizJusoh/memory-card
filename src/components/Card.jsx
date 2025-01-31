import { useState, useEffect } from 'react';

export default function Cards() {

  const [initialRender, setInitialRender] = useState(true);
  const [cardsArr, setCardsArr] = useState([]);
  const url = `https://genshin.jmp.blue/characters/`;

  useEffect(() => {
    if (initialRender) {
      fetch(url)
      .then(response => response.json())
      .then((data) => {
        let tempArr = [];
        for (let i=0;i<10;i++) {
          tempArr.push(data[i]);
        };
        return shuffle(tempArr);
      }).then((result) => setCardsArr(result))
      .catch(err => console.log(err));

      setInitialRender(false);
    }

    console.log(`render`);



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

  function handleShuffle() {
    setCardsArr(shuffle(cardsArr));
    displayCard();
  }

  function displayCard() {
    return cardsArr.map((card) => <li key={card} onClick={handleShuffle}><img src={`${url + card}/icon`} /><p>{card}</p></li>)
  }

  return (
    <div>
      <ul>
        {displayCard()}
      </ul>
    </div>
  )
}