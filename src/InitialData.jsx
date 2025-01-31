function InitialData() {
  const url = `https://genshin.jmp.blue/characters/`;

  const getDataPromise = fetch(url)
  .then(response => response.json())
  .then((data) => {
    let tempArr = [];
    for (let i=0;i<10;i++) {
      tempArr.push(data[i]);
    };
    return tempArr;
  }).catch(err => console.log(err));

  return getDataPromise;

}

export default InitialData;