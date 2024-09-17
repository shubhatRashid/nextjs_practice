import { galaticnight,guana,space } from "../../assets";
type image = {
    src : any,
    alt : string
}

const images : image[] = [
    {
      src: galaticnight.src,
      alt: 'GalaticNight',
    },
    {
      src: guana.src,
      alt: 'Guana',
    },
    {
      src: space.src,
      alt: 'space',
    },
    {
      src: 'https://picsum.photos/id/300/600/400',
      alt: 'Hay',
    },
    {
      src: 'https://picsum.photos/id/400/600/400',
      alt: 'Plants',
    },
    {
      src: 'https://picsum.photos/id/500/600/400',
      alt: 'Building',
    },
  ];

  export default images