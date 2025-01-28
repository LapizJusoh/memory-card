async function InitialData() {
  const url = `https://genshin.jmp.blue/characters/`, charArr = [];
  let resolveAllPromise;

  const characters = await fetch(url).then(response => response.json());
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
}

export default InitialData;