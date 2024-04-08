import React  from 'react'

export default function HomepageI({title}:{title:string}){
    const triangle: React.CSSProperties = {
        backgroundColor: "#FECB66",
      }; 
    return(
        <div className="drop-shadow-md">
            {/* <div className="flex h-13 bg-center bg-cover bg-no-repeat bg-[url('/images/background.png')] grid grid-rows-3">
                  <div className = "flex justify-between">
                    <img className="justify-self-start ml-20" src={"/images/lantern.png"}/>
                    <img className="justify-self-end mr-20" src={"/images/lantern.png"}/>
                    </div>
                    <h1 className="justify-self-center mb-20 text-6xl md:text-8xl font-kiona text-right">The Lantern</h1>
                    <h1 className="justify-self-center text-2xl md:text-4xl font-nunitolight text-center tracking-wide">A think-tank advocating socially responsible
                    <br></br> technology use and production</h1>
            </div>             */}

                <div className="flex h-13 justify-between bg-center bg-cover bg-no-repeat bg-[url('/images/background.png')]">
                  <div className = "flex justify-between">
                    <img className="justify-self-start ml-20 h-lantern-pic" src={"/images/lantern.png"}/>
                    </div>
                    <div>
                    <h1 className="justify-self-center mt-40 text-6xl md:text-8xl font-kiona text-center">The Lantern</h1>
                    <h1 className="justify-self-center mt-10 text-2xl md:text-4xl font-nunitolight text-center tracking-wide">A think-tank advocating socially responsible
                    <br></br> technology use and production</h1>
                    </div>
                    <img className="justify-self-end mr-20 h-lantern-pic" src={"/images/lantern.png"}/>

            </div>  

            <div className="h-20 w-full bg-bottom bg-cover bg-no-repeat bg-[url('/images/background.png')]" id="triangle"></div>
        </div>
     )
}