import React  from 'react'

export default function HomepageI({title}:{title:string}){
    const triangle: React.CSSProperties = {
        backgroundColor: "#FECB66",
      }; 
    return(
        <div className="drop-shadow-md">
            <div className="pb-20 flex h-13 bg-center bg-cover bg-no-repeat bg-[url('/images/background.png')] grid grid-rows-3" id="pentagon3">
                    <img className="justify-self-end mr-20" src={"/images/lantern.png"}/>
                    <h1 className="ml-20 pt-20 justify-self-start text-6xl md:text-8xl font-kiona text-right">The Lantern</h1>
                    <h1 className="justify-self-end mr-20 mt-40 mb-12 text-2xl md:text-4xl font-nunitolight text-center tracking-wide">A think-tank advocating socially responsible
                    <br></br> technology use and production</h1>
                    <img src={"/images/logo.png"} height={200} width={200} className="flex inline-flex rotate-6 opacity-40 self-end overflow-x-hidden"/>
            </div>            
            {/* <div className="h-20 w-full bg-bottom bg-cover bg-no-repeat bg-[url('/images/background.png')]" id="triangle"></div> */}
        </div>
     )
}