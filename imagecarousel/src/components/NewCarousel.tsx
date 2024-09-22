'use client'
import Image from "next/image";
import '../styles.css'
import { useEffect, useState } from "react";
type image = {
    src:string,
    alt:string,
    description : string
}

    export default function NewCarousel({images}:{images:image[]}) {
        const [allImages,setAllImages] = useState(images)
        const [current,setCurrent] = useState(0)
        const [change,setChange] = useState(false)

        const next = () => {
            setCurrent((curr) => (curr < allImages.length - 1 ? curr + 1 : curr)); 
            setChange(true)
        }
        
        const prev = () => {
            setCurrent((curr) => (curr > 0 ? curr - 1 : curr))
            setChange(true)
        }

         const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight') next();
            if (event.key === 'ArrowLeft')  prev();
         } 
        useEffect(()=>{
            window.addEventListener('keydown',handleKeyDown)
            return () => window.removeEventListener('keydown',handleKeyDown)
        },[change])

        useEffect(() => {
            setChange(false)
        },[change])

        return (
            <div className="relative flex justify-center items-center gap-10 h-screen w-[100%] overflow-hidden">
                {
                    allImages.map((eachimage,index) => (
                            <div 
                                id={`${index}`}
                                key={index} 
                                className="absolute rounded-lg w-[200px] h-[300px] z-100"
                                style={{
                                    '--index':index,
                                    transform: `translateX(${(index)*220}px)`,
                                    animation:(index === current) ? 'zoom 1s forwards':'slide 2s forwards',
                                }}
                                >
                            <Image
                                fill
                                objectFit="cover"
                                src={eachimage.src}
                                alt={eachimage.alt} 
                                style={{
                                    borderRadius:index!=0?'25px':'0',
                                }}
                                
                            />
                            </div>
                                
                    ))
                }
            <div className="absolute flex w-full h-full justify-center items-end gap-10">
                <button onClick={prev} className="bg-white p-3 rounded-full font-bold text-xl" >
                    <h1>{"<"}</h1>
                </button>
                <button  onClick={next} className="bg-white p-3 rounded-full font-bold text-xl">
                    <h1>{">"}</h1>
                </button>
            </div>
            </div>
        );
    }