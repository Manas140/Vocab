import "server-only";
import Actions from "@/components/actions";
import { fetchWord } from "@/utils/fetchWord";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Page({ searchParams }) {

  const { word } = await searchParams;
  const [data, antonyms, synonyms, homophones] = await fetchWord(word, true);
  const { phonetics, meanings } = data[0];

  return (
    <Suspense key={data} fallback={<Loading></Loading>}>
    <main className="p-7 md:p-10 lg:p-20 lg:px-[10vw] grid gap-5 md:gap-7 font-light lg:text-lg">
      <Actions
        word={word}
        phonetic={phonetics ? phonetics[phonetics?.length - 1]?.text : `/${word}/`}
        audioURL={phonetics ? phonetics[phonetics?.length - 1]?.audio : null}
      />
      <section className="grid grid-cols-1 lg:grid-cols-3 lg:gap-7 gap-5 items-start md:px-10">
        <section className="bg-al rounded-lg lg:col-span-2 grid">
          {meanings.map((mean, i) => {
            return (
              <div className="grid place-items-start first-of-type:border-t-0 border-t-2 border-br p-5 md:p-10 gap-5" key={i}>
                <p className="bg-bg2 p-2 rounded-lg px-5 text-fg2">{mean.partOfSpeech.toUpperCase()}</p>

                <ol type="1" className="md:list-decimal pl-3 md:pl-7 gap-5 grid">
                  {mean.definitions.map((def, i) => {
                    return (
                      <li key={i} className="">
                        <header className="">{def.definition}</header>
                        {def.example && <p className="text-fg2 text-base">{`"${def.example}"`}</p>}
                      </li>
                    );
                  })}
                </ol>
              </div>
            );
          })}
        </section>
        <section className="grid gap-5 col-span-1 lg:gap-7">
          {synonyms < 1 && antonyms.length < 1 && homophones.length < 1 && (
            <section className="bg-al p-10 rounded-lg gap-5 grid justify-items-start">
              <p className="text-fg2">There seems to be no data on this word</p>
            </section>
          )}

          {synonyms.length > 0 && (
            <section className="bg-al p-8 md:p-10 rounded-lg col-span-1 grid">
              <h3 className="pb-5 text-fg2">Synonyms</h3>
              <ul className="flex gap-3 place-items-start flex-wrap">{synonyms}</ul>
            </section>
          )}
          {antonyms.length > 0 && (
            <section className="bg-al p-8 md:p-10 rounded-lg col-span-1 grid">
              <h3 className="pb-5 text-fg2">Antonyms</h3>
              <ul className="flex gap-3 place-items-start flex-wrap">{antonyms}</ul>
            </section>
          )}
          {homophones.length > 0 && (
            <section className="bg-al p-8 md:p-10 rounded-lg col-span-1">
              <h3 className="pb-5 text-fg2">Homophones</h3>
              <ul className="flex gap-3 place-items-start flex-wrap">{homophones}</ul>
            </section>
          )}
        </section>
      </section>
      </main>
      </Suspense>
  );
}
