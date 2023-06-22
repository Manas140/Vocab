export async function getData() {
  const data = await fetch('/api', { 
    method: 'GET',
    cache: 'no-store'
  })
  const json = await data.json()
  return json;
} 

export async function getDef(word) {
  const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, { 
    method: 'GET',
  })
  const json = await data.json()
  return json;
} 