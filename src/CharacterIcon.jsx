export default function CharacterCard( {characterId} ) {

  const imageSrc = `https://genshin.jmp.blue/characters/${characterId.toLowerCase()}/icon`; 
  return (
    <div>
      <img src={imageSrc} alt={`${characterId}'s image`} />
      <p>{characterId}</p>
    </div>
  )
}