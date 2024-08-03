'use client'
const errorBoundry = ({error,reset}:{error:Error,reset:() => void}) => {
  return (
    <div>
      <div> {error.message}</div> 
      <button onClick={reset}>Try again</button>
    </div>
  )
}

export default errorBoundry