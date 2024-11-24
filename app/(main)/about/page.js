import 'server-only'
import { FaDiscord, FaGithub } from "react-icons/fa6"

export default async function Page() {

  return (<section className="grid grid-cols-3 gap-7 lg:px-10">
    <section className="grid gap-5 col-span-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:col-span-1">
      <div className="bg-[url('https://github.com/manas140.png')] bg-center rounded-lg bg-cover self-center">
        <div className="p-10 grid bg-ov gap-1">
          <p className="font-light text-fg2">Built By</p>
          <header className="font-normal text-3xl">Manas</header>
        </div>
      </div>
      <div className="bg-[url('https://github.com/saimoomedits.png')] bg-center rounded-lg bg-cover self-center">
        <div className="p-10 grid bg-ov gap-1">
          <p className="font-light text-fg2">Design By</p>
          <header className="font-normal text-3xl">Harry</header>
        </div>
      </div>
    </section>
    <section className="col-span-3 bg-al p-10 grid gap-5 content-start lg:col-span-2 rounded-lg">
      <header className="font-normal text-3xl">About Vocab</header>
      <p className="text-fg2 text-xl">Vocab is an open-source word dictionary website with the aim of making searching words easier with its simple and intuitive for a smooth user interface.<br/><br/>Unlike the rest, we kept it simple.</p>
    </section>
    <section className="col-span-3 bg-al p-10 grid gap-2 content-start lg:col-span-2 rounded-lg">
      <header className="font-normal text-3xl">Issue?</header>
      <p className="text-fg2 text-xl">Please report the issue using the link below</p>
      <a href='https://github.com/manas140/vocab/issues' className="underline text-fg2 hover:text-fg transition-colors text-wrap">github.com/manas140/vocab/issues</a>
    </section>
    <section className="grid gap-5 col-span-3 bg-al p-10 lg:col-span-1 rounded-lg">
      <header className="font-normal text-3xl">Socials</header>
      <div className="flex gap-5 text-2xl">
        <a href='https://github.com/manas140/vocab/' target="_blank" className="bg-bg2 rounded-full p-5 hover:bg-hw transition-colors"><FaGithub /></a>
        <a href='https://discord.com/users/695530925387153518' className="bg-bg2 rounded-full p-5 hover:bg-hw transition-colors"><FaDiscord /></a>
      </div>
    </section>
  </section>)
}