import Carousel from "./components/Carousel";
import images from "./data/data";
export default function Page() {
    return (
        <div>
            <Carousel images = {images}/>
        </div>
    );
}