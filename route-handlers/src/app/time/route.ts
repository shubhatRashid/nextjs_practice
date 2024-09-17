
export  function GET() {

    return  Response.json({time:new Date().toLocaleTimeString()})

}
// GET method is cached automatically