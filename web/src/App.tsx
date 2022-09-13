import './styles/main.css';
import logoImg from './assets/logo.svg';
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img className='w-[285.03px]' src={logoImg} alt="Logo NLW eSports" />
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className=' text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="#" className='relative rounded-lg overflow-hidden'>
          <img src="./game-1.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>League Of Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anunúncios</span>
          </div>
        </a>
        <a href="#" className='relative rounded-lg overflow-hidden'>
          <img src="./game-2.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anunúncios</span>
          </div>
        </a>
        <a href="#" className='relative rounded-lg overflow-hidden'>
          <img src="./game-3.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>CS:GO</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anunúncios</span>
          </div>
        </a>
        <a href="#" className='relative rounded-lg overflow-hidden'>
          <img src="./game-4.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anunúncios</span>
          </div>
        </a>
        <a href="#" className='relative rounded-lg overflow-hidden'>
          <img src="./game-5.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anunúncios</span>
          </div>
        </a>
        <a href="#" className='relative rounded-lg overflow-hidden'>
          <img src="./game-6.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anunúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-nlw-gradient mt-8  self-stretch rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 self-stretch flex justify-between items-center'>
          <div>
            <strong className='block text=2xl text-white font-black'>Não encontrou seu duo?</strong>
            <span className='block text-zinc-400'>Publique um anúncio para encontrar novos players</span>
          </div>
          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
