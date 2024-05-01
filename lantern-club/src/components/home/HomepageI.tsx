import React  from 'react'

export default function HomepageI({title}:{title:string}){
    const triangle: React.CSSProperties = {
        backgroundColor: "#FECB66",
      }; 
    return(
        <div className="drop-shadow-md">
            <div className="flex justify-center align-center bg-center bg-cover bg-no-repeat bg-[url('/images/background.png')] relative" id="header-pent">
                    <div className='mx-5 flex flex-col col-1 '>
                      <img className="flex text-center mx-auto md:w-1/2 md:h-lantern-pic" src={"/images/text-logo.png"}/> 
                      {/* <h1 className="justify-self-center mt-40 text-6xl md:text-8xl font-kiona font-bold text-center">The Lantern</h1> */}
                      <h1 className="justify-self-center my-10 text-xl pt-2 pb-20 md:pb-20 md:text-4xl font-nunitolight italic text-center tracking-wide">A think-tank advocating for socially responsible
                      <br/>technology use and production</h1>
                    </div>
            </div>  
        </div>
     )
}