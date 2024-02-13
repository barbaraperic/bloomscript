import Title from './components/Title'

const cards = Array.from({ length: 10 }, (_, index) => index);


export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="hover:animate-shake cursor-pointer">JavaScript methods tutorial</h1>
       {/* <div className='animate-move-like-a-square rounded-full h-10 w-10 bg-red-950 '></div>  */}
      <div className='grid grid-cols-4 gap-4 m-auto'>

      {cards.map((card, index) => (
        <div key={index} style={{
            '--i': index
          } as any} className='animate-slide-up opacity-0 hover:scale-105 flex justify-center items-center transition-all h-20 w-20 border border-black rounded-lg cursor-pointer'>{card}</div>
      ))}
        
       
      </div>
    </main>
  )
}
