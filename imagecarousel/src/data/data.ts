import { galaticnight,guana,space,gaming,computer,mountain,cactus,landscape } from "../../assets";
type image = {
    src : string,
    alt : string,
    description : string
}

const images: image[] = [
  {
    src: galaticnight.src,
    alt: 'GalaticNight',
    description: 'A mesmerizing view of a galactic night sky, filled with vibrant stars and nebulae. This image captures the beauty of space in its most enchanting form, offering a glimpse into the wonders of the cosmos with a rich, colorful display of stellar phenomena.'
  },
  {
    src: guana.src,
    alt: 'Guana',
    description: 'An intriguing shot of a lush, green Guana landscape, showcasing dense vegetation and exotic plant life. The image emphasizes the natural beauty and biodiversity of the region, highlighting the vibrant ecosystem and the serene, untouched environment of the Guana area.'
  },
  {
    src: space.src,
    alt: 'space',
    description: 'A breathtaking depiction of outer space, featuring a vast expanse of stars, planets, and cosmic dust. The image offers a panoramic view of the universe, illustrating the grandeur and mystery of space with an impressive array of celestial objects and phenomena.'
  },
  {
    src: gaming.src,
    alt: 'gaming',
    description: 'A dynamic image capturing the excitement of gaming, featuring a high-resolution screenshot of a popular video game. The image showcases intense action, detailed graphics, and immersive gameplay, providing a glimpse into the engaging and interactive world of modern gaming.'
  },
  {
    src: computer.src,
    alt: 'computer',
    description: 'A sleek and modern computer setup, highlighting the latest technology in computing. The image features a stylish monitor, keyboard, and other peripherals, emphasizing both functionality and design. It represents the cutting-edge advancements in digital technology and computing power.'
  },
  {
    src: mountain.src,
    alt: 'Mountain',
    description: 'A breathtaking view of towering mountain peaks bathed in the golden light of dawn. The rugged terrain and snow-capped summits create a dramatic landscape, showcasing the majesty of nature. This image conveys a sense of tranquility and awe-inspiring grandeur, perfect for nature enthusiasts.'
  },
  {
    src: cactus.src,
    alt: 'Cactus',
    description: 'A vibrant close-up of a resilient cactus plant thriving in its arid desert environment. The image highlights the unique textures and patterns of the cactus spines, set against a backdrop of sun-drenched sand. It captures the stark beauty and adaptability of desert flora.'
  },
  {
    src: landscape.src,
    alt: 'Landscape',
    description: 'A picturesque landscape featuring rolling hills, lush greenery, and a serene river winding through the scene. The image captures the essence of natural beauty with its vibrant colors and peaceful atmosphere, offering a tranquil escape into the idyllic countryside.'
  }
];


  export default images