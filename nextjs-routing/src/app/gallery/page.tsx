import Link from "next/link";
import photos from "./_photos";
import "./styles.css"

export default function Page() {
    return (
        <div className="flex justify-center items-center width-[100%] gap-[4%]">
            {
                photos.map((photo,index) => {
                    return (
                        <Link href={'/gallery/'+photo.id} className="flex flex-col width-[20%]" key={index}>
                            <img src={photo.source.src} alt='no image found' />
                            <h3>{photo.name}</h3>
                            <p>{photo.description}</p>
                        </Link >
                    )
                })
            }
        </div>
    );
}