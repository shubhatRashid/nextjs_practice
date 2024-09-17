'use client'
import { useState } from "react";
type image = {
    src : string,
    alt : string
}
export default function Carousel({images}:{images:image[]}) {
    const [currImageIndex,setCurrImageIndex] = useState(0)
    return (
        <div>
            <div>
                <img src={images[currImageIndex].src} alt={images[currImageIndex].alt} />
            </div>
            <div>
                {images.map((eachImage,index) => (
                    <button key={index} >
                        <img src={eachImage.src} alt={eachImage.alt} />
                    </button>
                ))}
            </div>
        </div>
    );
}