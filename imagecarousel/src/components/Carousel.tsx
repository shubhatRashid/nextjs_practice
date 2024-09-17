'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
type image = {
    src : any,
    alt : string
}
export default function Carousel({images}:{images:image[]}) {
    const [currImageIndex,setCurrImageIndex] = useState(1)
    const [allImages,setAllImages] = useState(images)

    const next = () => {
        currImageIndex+1 < allImages.length ? setCurrImageIndex(currImageIndex+1) : setCurrImageIndex(0)
        let temp = [...allImages]
        let currImage =  temp.shift()
        temp.push(currImage)
        setAllImages(temp)
        setCurrImageIndex(0)
        
    }
    const prev = () => {
        currImageIndex-1 > -1 ? setCurrImageIndex(currImageIndex-1) : setCurrImageIndex(images.length-1)
        
    }
    const handleClick = (index:number) => {
        setCurrImageIndex(index)
    }

    const handleKeyPress = (event:KeyboardEvent) => {
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
    },[allImages,currImageIndex])
    return (
        <div className="relative w-screen h-screen text-black overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                <Image priority fill style={{objectFit:'cover'}} src={allImages[currImageIndex].src}   alt={allImages[currImageIndex].alt} />
            </div>
            <div className="absolute h-full left-[60%] flex items-center justify-center gap-5">
                    {allImages.map((eachImage,index) => (
                        <button 
                            id="thumbnail"
                            key={index} className="relative rounded-xl" 
                            style={{border:index === currImageIndex? '2px solid white':'none',
                                    height:index === currImageIndex? '320px' : '250px',
                                    width:index === currImageIndex? '220px': "150px"
                            }}
                            onClick={() => handleClick(index)}
                        >
                            <Image priority fill src={eachImage.src} alt={eachImage.alt}  style={{borderRadius:'10px',objectFit:'cover'}}/>
                        </button>
                    ))}
            </div>
            <div className="absolute flex items-center justify-center bottom-5 gap-2 w-full">
                <button className="border rounded-full px-3 py-1 bg-white opacity-[90%] text-xl font-bold font-serif" onClick={prev}>{"<"}</button>
                <button className="border rounded-full px-3 py-1 bg-white opacity-[90%] text-xl font-bold font-serif" onClick={next}>{">"}</button>
            </div>
        </div>
    );
}