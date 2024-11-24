import { notFound } from "next/navigation";

export async function fetchWord(word, extra) {
  let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

  let synonyms, antonyms, data;
  let homophones = [];
  const wasOk = response.ok;

  if (wasOk) {
    data = await response.json();
    if (extra) {
      [synonyms, antonyms] = data[0].meanings
        .map((mean) => {
          return [
            mean.synonyms.map((syn, i) => {
              return (
                <a href={`/word?word=${syn}`} className="bg-bg2 p-2 rounded-full px-5 hover:bg-hw transition-colors text-base" key={i}>
                  {syn}
                </a>
              );
            }),
            mean.antonyms.map((ant, i) => {
              return (
                <a href={`/word?word=${ant}`} className="bg-bg2 p-2 rounded-full px-5 hover:bg-hw transition-colors text-base" key={i}>
                  {ant}
                </a>
              );
            }),
          ];
        })
        .flat();
    }
  } else {
    response = await fetch(`https://api.datamuse.com/words?md=d&max=1&sp=${word}`);
    const body = await response.json();
    console.log(body);
    if (body.length == 0) {
      notFound();
    }
    data = [{ meanings: [], phonetics: [] }];

    const partOfSpeechs = {
      n: "noun",
      adj: "adjective",
      adv: "adverb",
      v: "verb",
      u: "null",
    };

    const groupedWords = {};

    body[0].defs.forEach((defs) => {
      const parts = defs.split("\t");
      const partOfSpeech = parts[0];
      const definition = parts[1];

      if (!groupedWords[partOfSpeech]) {
        groupedWords[partOfSpeech] = [];
      }

      groupedWords[partOfSpeech].push({ definition });
    });

    for (const [key, value] of Object.entries(groupedWords)) {
      data[0].meanings.push({
        partOfSpeech: partOfSpeechs[key.toLowerCase()],
        definitions: value,
      });
    }

    if (extra) {
      const synonymsResponse = await fetch(`https://api.datamuse.com/words?rel_syn=${word}&max=10`);
      const syn = synonymsResponse.ok && (await synonymsResponse.json());
      synonyms = syn.map((word, i) => {
        return (
          <a href={`/word?word=${word.word}`} className="bg-bg2 p-2 rounded-full px-5 hover:bg-hw transition-colors text-base" key={i}>
            {word.word}
          </a>
        );
      });

      const antynomsResponse = await fetch(`https://api.datamuse.com/words?rel_ant=${word}&max=10`);
      const ant = antynomsResponse.ok && (await antynomsResponse.json());
      antonyms = ant.map((word, i) => {
        return (
          <a href={`/word?word=${word.word}`} className="bg-bg2 p-2 rounded-full px-5 hover:bg-hw transition-colors text-base" key={i}>
            {word.word}
          </a>
        );
      });
      const homophonesResponse = await fetch(`https://api.datamuse.com/words?rel_hom=${word}&max=10`);
      const rhy = homophonesResponse.ok && (await homophonesResponse.json());
      homophones = rhy.map((word, i) => {
        return (
          <a href={`/word?word=${word.word}`} className="bg-bg2 p-2 rounded-full px-5 hover:bg-hw transition-colors text-base" key={i}>
            {word.word}
          </a>
        );
      });
    }
  }

  return extra ? [data, antonyms, synonyms, homophones] : data;
}
