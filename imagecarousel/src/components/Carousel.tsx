'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
type image = {
    src : {},
    alt : string,
    description : string
}
export default function Carousel({images}:{images:image[]}) {
    const [currImageIndex,setCurrImageIndex] = useState(0)

    const next = () => {
        currImageIndex+1 < images.length ? setCurrImageIndex(currImageIndex+1) : setCurrImageIndex(0)
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
    },[images,currImageIndex])
    return (
        <div className="relative w-screen h-screen text-black overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                <Image priority fill style={{objectFit:'cover'}} src={images[currImageIndex].src}   alt={images[currImageIndex].alt} />
                <div 
                    className="absolute text-gray-100 font-serif top-[35%] right-[60%] left-[10%] 
                               border rounded-xl p-5 bg-black  opacity-[25%] hover:opacity-[100%] 
                               cursor-pointer"
                >
                    <h1 className="capitalize text-xl font-bold">{images[currImageIndex].alt}</h1>
                    <span className="">{images[currImageIndex].description}</span>
                </div>
            </div>
            <div id="slider" className="relative h-full w-full left-[30%] flex items-center justify-center">
            <div
                className="relative flex items-center justify-center gap-5"
                style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${currImageIndex * -Math.round(360/images.length)}deg)`,
                transition: "transform 1s ease",
                perspective: "10000px", // Add perspective to the container for 3D effect
                }}
            >
                {images.map((eachImage, index) => {
                const angle = (360 / images.length) * index; // Calculate the angle for each image

                return (
                    <button
                    id="eachSlide"
                    key={index}
                    className={`absolute w-[150px] h-[250px] rounded-xl ${
                        index === currImageIndex && "animate-once"
                    }`}
                    style={{
                        transform: `rotateY(${angle}deg) translateZ(250px)`, // Rotate and translate to give a circular 3D effect
                        border: index === currImageIndex ? "2px solid white" : "none",
                        height: index === currImageIndex ? "320px" : "250px",
                        width: index === currImageIndex ? "220px" : "150px",
                    }}
                    onClick={() => handleClick(index)}
                    >
                    <Image
                        priority
                        fill
                        src={eachImage.src}
                        alt={eachImage.alt}
                        style={{
                        borderRadius: "10px",
                        objectFit: "cover",
                        }}
                    />
                    </button>
                );
                })}
            </div>
            </div>

            <div className="absolute flex items-center justify-center bottom-5 gap-2 w-full">
                <button className="border rounded-full px-3 py-1 bg-white opacity-[90%] text-xl font-bold font-serif" onClick={prev}>{"<"}</button>
                <button className="border rounded-full px-3 py-1 bg-white opacity-[90%] text-xl font-bold font-serif" onClick={next}>{">"}</button>
            </div>
        </div>
    );
}