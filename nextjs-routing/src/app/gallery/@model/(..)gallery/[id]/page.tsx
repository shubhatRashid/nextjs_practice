import photos from "@/app/gallery/_photos"
import "./styles.css"

type Params = {
    id : number
  }
  
export default function Page({params}:{params:Params}) {
    type Photo = {
        id : number,
        name : string,
        description : string,
        source : any
    }
    const matchedPhotos : Photo[] = photos.filter((photo) => photo.id == params.id)
    const foundphoto:Photo = matchedPhotos[0] 
        return (
            <div className="absolute left-[10%] top-[10%] w-[80%]">
                <div className="flex flex-col justify-center items-center w-[100%] h-screen">
                    <h3>{foundphoto.name}</h3>
                    <p>{foundphoto.description}</p>
                    <img src={foundphoto.source.src} alt='no image found' style={{width:"50%"}}/>
                </div>
            </div>
        )
    ;
}