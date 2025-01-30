async function InitialData() {
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

  /*
  const charArr = [];
  let resolveAllPromise;

  const responses = await Promise.all(
    characters.map((chara) => {
      return fetch(url + chara);
    })
  );

  resolveAllPromise = Promise.all(
    responses.map(async(r) => {
      charArr.push(await r.json());
    })
  ).catch(err => console.log(err));

  return resolveAllPromise.then(() => {
    return charArr;
  });
  */
}

export default InitialData;