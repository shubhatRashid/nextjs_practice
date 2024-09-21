'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

// Define a type for the image data structure
type ImageType = {
    src: string, // Adjusted to ensure it works with next/image
    alt: string,
    description: string
}

// Carousel component that takes an array of images
export default function Carousel({ images }: { images: ImageType[] }) {
    const [currImageIndex, setCurrImageIndex] = useState(0); // State to track the current image index
    const [descrip,setDescrip] = useState(false) // State used to animate description of image on change

    // Function to move to the next image
    const next = () => {
        // If the current image is not the last, increment the index. Otherwise, go back to the first image.
        setCurrImageIndex((currImageIndex + 1) % images.length);
        setDescrip(false) // setting it false so that useeffect can turn it true again for next animation
    };

    // Function to move to the previous image
    const prev = () => {
        // If the current image is not the first, decrement the index. Otherwise, go to the last image.
        setCurrImageIndex(currImageIndex - 1 >= 0 ? currImageIndex - 1 : images.length - 1);
    };

    // Function to handle when a user clicks on a specific image
    const handleClick = (index: number) => {
        setCurrImageIndex(index);
    };

    // Function to handle keyboard arrow keys for navigation
    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
            prev();
        } else if (event.key === 'ArrowRight') {
            next();
        }
    };

    // Set up an event listener for key presses (Arrow keys) and cleanup when the component unmounts
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [currImageIndex]); // Ensure effect runs when `currImageIndex` changes

    // Set up a 3-second interval to auto-rotate the carousel and cleanup when the component unmounts
    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 3000);

        return () => clearInterval(interval); // Clear the interval when component is unmounted
    }, [currImageIndex]); // Ensure the interval resets if `currImageIndex` changes

    // trigger description animation anytime currImageIndex changes
    useEffect(() => {
        setDescrip(true)
    },[currImageIndex])
    return (
        <div className="relative w-screen h-screen text-black overflow-hidden">

            {/* Main image display */}
            <div 
                id='mainImage' 
                className="absolute inset-0 w-full h-full"
                style={{animation :descrip? 'zoomOut 1s ease' : ''}}
                >

                {/* Display the current image with cover styling */}
                <Image 
                    priority 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    src={images[currImageIndex].src} 
                    alt={images[currImageIndex].alt} 
                />

                {/* Overlay with image description and title */}
                <div 
                    id="description"
                    className="absolute text-gray-100 font-serif top-[35%] right-[60%] left-[10%] 
                               border rounded-xl p-5 bg-black opacity-[45%] hover:opacity-[100%] 
                               cursor-pointer"
                    style={{animation :descrip? 'slide 1s ease' : ''}}
                >
                    <h1 className="capitalize text-xl font-bold">{images[currImageIndex].alt}</h1>
                    <span>{images[currImageIndex].description}</span>
                </div>

            </div>

            {/* 3D rotating thumbnail carousel */}
            <div id="slider" className="relative h-full w-full left-[30%] flex items-center justify-center">
                <div
                    className="relative flex items-center justify-center gap-5"
                    style={{
                        transformStyle: "preserve-3d", // Ensures that child elements maintain their 3D transforms
                        transform: `rotateY(${currImageIndex * -Math.round(360 / images.length)}deg)`, // Rotate based on the current image index
                        transition: "transform 1s ease", // Smooth transition between image changes
                    }}
                >
                    {images.map((eachImage, index) => {
                        const angle = (360 / images.length) * index; // Calculate the angle for each image

                        return (
                            <button
                                id="eachSlide"
                                key={index}
                                className={`absolute w-[150px] h-[250px] rounded-xl ${index === currImageIndex && "animate-once"}`}
                                style={{
                                    transform: `rotateY(${angle}deg) translateZ(250px)`, // Set position in a circular 3D space
                                    border: index === currImageIndex ? "2px solid white" : "none", // Highlight the selected image
                                    height: index === currImageIndex ? "350px" : "250px", // Enlarge the selected image
                                    width: index === currImageIndex ? "250px" : "150px",
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

            {/* Navigation buttons */}
            <div className="absolute flex items-center justify-center bottom-5 gap-2 w-full">
                <button 
                    className="border rounded-full px-3 py-1 bg-white opacity-[90%] text-xl font-bold font-serif"
                    onClick={prev}
                >
                    {"<"}
                </button>
                <button 
                    className="border rounded-full px-3 py-1 bg-white opacity-[90%] text-xl font-bold font-serif"
                    onClick={next}
                >
                    {">"}
                </button>
            </div>
        </div>
    );
}
