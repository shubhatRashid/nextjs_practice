const layout = ({children}:{children:React.ReactNode}) => {
  return (  
    <div>
        <p>auth layout</p>
        <h1>
            {children}
        </h1>
    </div>
  )
}

export default layout