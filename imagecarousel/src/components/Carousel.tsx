'use client'
import { useEffect, useState } from "react";
type image = {
    src : string,
    alt : string
}
export default function Carousel({images}:{images:image[]}) {
    const [currImageIndex,setCurrImageIndex] = useState(0)

    const next = () => {
        currImageIndex+1 < images.length? setCurrImageIndex(currImageIndex+1) : setCurrImageIndex(0)
    }
    const prev = () => {
        currImageIndex-1 > -1 ? setCurrImageIndex(currImageIndex-1) : setCurrImageIndex(images.length-1)
    }
    const handleClick = (index:number) => {
        setCurrImageIndex(index)
    }

    const handleKeyPress = (event:KeyboardEvent) => {
        console.log(event.key)
        if (event.key === 'ArrowLeft'){
            prev()
        }

        else if (event.key === 'ArrowRight'){
            next()
        }
    }
    useEffect(() => {
        window.addEventListener('keydown',handleKeyPress)

        return () => window.removeEventListener('keydown',handleKeyPress)
    },[currImageIndex])
    return (
        <div className="relative w-screen h-screen text-white">
            <div className="absolute inset-0 w-full h-full">
                <img  className='w-full h-full object-cover' src={images[currImageIndex].src} alt={images[currImageIndex].alt} />
            </div>
            <div className="absolute flex items-center justify-center bottom-5 ">
                <button className="border rounded-xl px-3 py-1" onClick={prev}>{"<"}</button>
                <div className="flex items-center justify-center gap-5 w-[80%]">
                    {images.map((eachImage,index) => (
                        <button 
                            key={index} className="w-[7%] h-[7%] rounded-xl" 
                            style={{border:index === currImageIndex? '2px solid white':'none'}}
                            onClick={() => handleClick(index)}
                        >
                            <img src={eachImage.src} alt={eachImage.alt} className="rounded-xl" />
                        </button>
                    ))}
                </div>
                <button className="border rounded-xl px-3 py-1" onClick={next}>{">"}</button>
            </div>
        </div>
    );
}