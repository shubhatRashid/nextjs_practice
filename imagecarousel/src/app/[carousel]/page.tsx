import ThreeDCarousel from "@/components/ThreeDCarousel";
import ModernCarousel from "@/components/ModernCarousel";
import images from "@/data/data";

export default function Page({params}:{params:{carousel:string}}) {
    return (
         params.carousel === 'threedcarousel' ? <ThreeDCarousel images = {images}/> : <ModernCarousel images = {images} />
    )
}