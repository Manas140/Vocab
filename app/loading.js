export default function Loading() {
  return(
    <main className='grid gap-5 m-10 mb-20 justify-self-center grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 min-w-[80%] motion-safe:animate-pulse'>
      {
        Array.from({ length: 4 }, (_, i) => {
          return (
            <div className={`gap-y-5 flex flex-col ${i == 2 && ('hidden lg:flex')} ${i == 3 && ('hidden xl:flex')}`}>
              {
                Array.from({ length: 3 }, () => {
                  return <article className="rounded-md transition-all border-2 bg-gradient-loading border-gray grid hover:border-gray-light" style={{ height: `${Math.floor(Math.random() * 10) + 12}em`, }}></article>
                })
              }
            </div>
          )
        })
      }
    </main>
  )
}