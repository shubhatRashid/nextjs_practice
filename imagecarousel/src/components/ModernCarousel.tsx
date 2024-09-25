'use client'
import Image from "next/image";
import '../styles.css'
import { useEffect, useState } from "react";
import { url } from "inspector";
type image = {
    src:string,
    alt:string,
    description : string
}

    export default function ModernCarousel({images}:{images:image[]}) {
        const [allImages,setAllImages] = useState(images)
        const [current,setCurrent] = useState(0)

        const next = () => {
            setCurrent((curr) => (curr < allImages.length - 1 ? curr + 1 : 0));
        }
        
        const prev = () => {
            setCurrent((curr) => (curr > 0 ? curr - 1 : allImages.length -1)); 
        }
        

         const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight') next();
            if (event.key === 'ArrowLeft')  prev();
         } 
        useEffect(()=>{
            window.addEventListener('keydown',handleKeyDown)
            return () => window.removeEventListener('keydown',handleKeyDown)
        },[current,allImages])

        useEffect(() => {
            const interval = setInterval(() => {
                next();
            }, 3000);
    
            return () => clearInterval(interval); // Clear the interval when component is unmounted
        }, [current]); // Ensure the interval resets if `currImageIndex` changes
        return (
            <div 
                className="relative flex justify-center items-center gap-10 h-screen w-[100%] overflow-hidden"
            >
                {
                    allImages.map((eachimage,index) => (
                            <div 
                                id= {`{${index}}`}
                                key={index} 
                                className="absolute rounded-lg w-[200px] h-[300px]" 
                                style={{
                                    transform: `translateX(${(index-current)*220}px)`,
                                    transition: 'transform 1s ease-in-out',
                                    animation:(index <= current) ? 'scaleUp 1s forwards':'scaleDown 1s forwards'
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
                                {index === current && (
                                    <div 
                                        id="description"
                                        className="absolute flex flex-col  text-gray-100 font-serif top-[15%] right-[60%] left-[10%]"
                                        style={{animation:'slide 1s ease'}}
                                    >
                                        <h1 className="capitalize text-7xl font-bold">{images[current].alt}</h1>
                                        <p className="pl-5 pt-5">{images[current].description}</p>
                                    </div>  
                                )}
                            </div>
                                
                    ))
                }
            <div className="absolute flex justify-center items-center w-full h-full gap-10 right-[30%] top-[10%] opacity-[40%]">
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