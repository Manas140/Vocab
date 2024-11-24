import "server-only";
import { FaAngleRight } from "react-icons/fa6";
import { fetchWord } from "@/utils/fetchWord";

export default async function Home() {
  const wordList = await fetch(`https://random-word-api.vercel.app/api?words=6`, { next: { revalidate: 60 } });
  if (!wordList.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await wordList.json();
  const word = json[0];

  const data = await fetchWord(word, false);
  const { meanings } = data[0];

  return (
    <section className="grid gap-16 lg:gap-7 lg:grid-cols-3 grid-cols-1 items-start">
      <section className="col-span-1 lg:col-span-2 grid-cols-1 grid">
        <section className="bg-al p-10 md:p-10 rounded-lg col-span-2 justify-between items-center">
          <div className="grid gap-5">
            <h1 className="text-xl md:text-xl text-fg2">Learn this word</h1>
            <div className="flex justify-between items-end -mt-3 gap-5">
              <p className="text-5xl">{`${word}`.toUpperCase()}</p>
            </div>
            {meanings.slice(0,2).map((mean, i) => {
              return (
                <div className="grid place-items-start gap-5" key={i}>
                  <p className="bg-bg2 p-2 rounded-lg px-5 text-fg2">{mean.partOfSpeech.toUpperCase()}</p>
                  <ol type="1" className="md:list-decimal px-2 md:pl-7 gap-5 grid">
                    {mean.definitions.slice(0, 3).map((def, i) => {
                      return (
                        <li key={i}>
                          <header>{def.definition}</header>
                          <p className="text-fg2 text-base">{def.example ? def.example : ""}</p>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              );
            })}
          </div>
        </section>
        <a
          className="bg-bg2 rounded-full p-4 px-10 hover:bg-hw transition-color text-base flex gap-3 items-center justify-self-end absolute self-end -mb-7 mr-5"
          href={`/word?word=${word}`}>
          Learn <FaAngleRight />
        </a>
      </section>
      <div className="bg-al rounded-lg">
        <div className="grid gap-5">
          <h1 className="text-xl md:text-xl text-fg2 p-10 pb-3">Learn a few more words</h1>
          <ul className="md:list-none grid ">
            {json.slice(1, 6).map((word, i) => {
              return (
                <li className=" border-t-2 first:border-t-0 last:rounded-b-lg border-bg2 hover:bg-bg2 transition-colors" key={i}>
                  <a href={`/word?word=${word}`}>
                    <header className="p-5 px-10">{word.charAt(0).toUpperCase() + word.slice(1)}</header>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
