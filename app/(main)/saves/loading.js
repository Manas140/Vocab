export default function Page() {

  return (<main className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 motion-safe:animate-pulse lg:px-10">
    {
      Array.from({ length: 9 }, (_, i) => {
        return (<div className="bg-gradient-loading px-9 p-6 rounded-lg flex gap-3 items-center justify-between" key={i}>
          <h3 className="text-al">HAHA</h3>
          <button className="text-al bg-gradient-loading p-3 rounded-lg " >X</button>
        </div>)
      })
    }
  </main>)
}