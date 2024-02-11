import React  , {useState , useEffect}from 'react';
import '../../../style/homeStyle/info.css'
import { Heading } from '@chakra-ui/react';
export default function Info(){
  const [isHovered, setIsHovered] = useState(false);
  const [b , setB] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      // Update state based on window width
      if (window.innerWidth < 800) {
        setIsHovered(true);
        setB(true);
      } else {
        setIsHovered(false);
        setB(false);
      }
    }; handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
return(
<div id='info'>
  <div className="container" style={{ paddingTop: '7%' }} >
  <div className="imageContainer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
    <img
      src={require('../../../style/images/267981-white-ice-skates-for-figure-skating.jpg')}
      alt="Image 1"
    />
    {isHovered  && (
      <div className={`overlay ${isHovered ? 'active' : ''}`}>
       <Heading as="h1" size="lg" id='hd1' textAlign="center">
              Patinazh ne akull
              </Heading>
      </div>
    )}
  </div>
  <div className="imageContainer" onMouseEnter={() => setB(true)} onMouseLeave={() => setB(false)}>
    <img
      src={require('../../../style/images/wallpaperflare.com_wallpaper(1).jpg')}
      alt="Image 2"
    />
    {b && (
      <div className={`overlay ${b ? 'active' : ''}`}>
      <Heading as="h1" size="lg" id='hd2' textAlign="center">
              Patinazh
              </Heading>
      </div>
    )}
  </div>
</div>
</div>
)


}