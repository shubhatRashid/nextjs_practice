const page = ({params}:{params:{slug:number[]}}) => {
  return (
    
    <div>
        {
          params.slug.map((v,i) => (
            <p>{v}</p>
          ))
        }
    </div>
  )
}

export default page