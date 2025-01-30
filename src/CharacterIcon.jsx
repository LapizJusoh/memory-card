export default function CharacterCard( {characterId, parentFunction} ) {

  const imageSrc = `https://genshin.jmp.blue/characters/${characterId.toLowerCase()}/icon`; 
  return (
    <div onClick={parentFunction}>
      <img src={imageSrc} alt={`${characterId}'s image`} />
      <p>{characterId.charAt(0).toUpperCase() + characterId.slice(1)}</p>
    </div>
  )
}