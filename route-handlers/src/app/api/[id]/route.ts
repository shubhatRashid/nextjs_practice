import data from "../data"

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

