import Heropng from '../assets/hero.avif'

export const Hero=()=>{

return(

    <div className="bg-yellow-400 flex-1 h-full flex justify-center items-center">

        <div className='m-auto flex justify-around items-start bg-slate-100 w-[80rem] h-[45rem]'>

            <div className='bg-gray-500 overflow-hidden h-[33rem] w-full flex justify-between items-center' >
                {/* left text */}
            <div className=' flex flex-col justify-center flex-grow overflow-hidden'> 
        <h1 className='text-5xl whitespace-nowrap overflow-ellipsis'  >Advanced Payment Solutions</h1>
        <h2 className='whitespace-nowrap'>Djfa;sdjfl;asjdkl;jasl;kdjf</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit a </p>
        <div className='flex'>
        <button>Sign up NOw</button>
        <a href="">Know More</a>
        </div>
            </div>
    <img className='w-[60rem] h-[30rem]  ' src={Heropng} alt="" />
            </div>
        </div>

    </div>
)
}