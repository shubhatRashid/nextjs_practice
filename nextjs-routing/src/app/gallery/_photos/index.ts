import photo1 from './photo1.jpeg'
import photo2 from './photo2.jpeg'
import photo3 from './photo3.jpeg'
import photo4 from './photo4.jpeg'

type Photo = {
    id : number,
    name : string,
    description : string,
    source : any
}

const photos:Photo[] = [
    {
        id:1,
        name : 'abcd',
        description : 'This is photo 01',
        source : photo1

    },
    {
        id:2,
        name: 'efgh',
        description : 'This is photo 02',
        source : photo2

    },
    {
        id:3,
        name:'ijkl',
        description : 'This is photo 03',
        source : photo3

    },
    {
        id:4,
        name : 'mnop',
        description : 'This is photo 04',
        source : photo4

    }]
export default photos