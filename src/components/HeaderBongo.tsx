import Image from "next/image"

function HeaderBongo() {
    return (
        <div className='flex flex-col items-center mb-4 text-white sm:mt-0 mt-8'>
            <div>
            <Image width={300} height={300} src="/bongo-cat.gif" alt="Bongo Cat" />
            </div>  
            <span className="text-xs tracking-4 text-white/80">Totalmente não profissional</span>
            <span className=' font-bold text-3xl'>
                Bongo <span className="font-thin text-3xl">GPT</span>
            </span>
        </div>
    )
}

export default HeaderBongo