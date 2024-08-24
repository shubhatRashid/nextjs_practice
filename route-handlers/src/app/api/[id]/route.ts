import data from "../data"
import { redirect } from "next/navigation"

export async function GET(request:Request,{params}:{params:{id:string}}) {
    try {
        const item = data.find((eachitem)=>eachitem.id == parseInt(params.id))
        if (item == null){
            throw new Error('something unexpected happned')
        }
        return new Response(JSON.stringify(item))

    } catch (error) {
       redirect('/api')
    }
   
}

export async function PATCH(request:Request,{params}:{params:{id:string}}) {
    try {
        const item = data.find((eachitem)=>eachitem.id == parseInt(params.id))
        if (item == null){
            throw new Error('something unexpected happned')
        }
        const newData = await request.json()
        item.description = newData.description
        return new Response(JSON.stringify(item))

    } catch (error) {
        return new Response(error.message)
    }
   
}

export async function DELETE(request:Request,{params}:{params:{id:string}}) {
    try {
        let newdata = data.filter((eachitem)=>eachitem.id != parseInt(params.id))
        
        return new Response(JSON.stringify(newdata))

    } catch (error) {
        return new Response(error.message)
    }
   
}

