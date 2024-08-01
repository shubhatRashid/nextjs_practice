'use client'
const errorBoundry = ({error}:{error:Error}) => {
  return (
    <div>{error.message}</div>
  )
}

export default errorBoundry