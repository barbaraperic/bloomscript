import Title from './components/Title'

const cards = Array.from({ length: 10 }, (_, index) => index);


export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <Title>JavaScript methods tutorial</Title>
      {/* <div className='animate-slide-in rounded-full h-10 w-10 bg-red-950 '></div> */}
            <div className='grid grid-cols-4 gap-4 m-auto'>

      {cards.map((card, index) => (
<div key={index} className='hover:scale-105 flex justify-center items-center transition-all h-20 w-20 border border-black rounded-lg cursor-pointer'>{card}</div>
      ))}
        
       
      </div>
    </main>
  )
}
