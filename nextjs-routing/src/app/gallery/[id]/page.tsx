import photos from "../_photos";
import "../styles.css"

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
            <div className="flex flex-col justify-center items-center w-[100%] h-screen">
                <img src={foundphoto.source.src} alt='no image found' style={{width:"50%"}}/>
                <h3>{foundphoto.name}</h3>
                <p>{foundphoto.description}</p>
            </div>
        )
    ;
}