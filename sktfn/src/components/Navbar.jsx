import React  , {useEffect , useState , useRef}from "react";
import '../style/navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar(){
    const navRef = useRef();
    
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
    const headerRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
    
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        setScrolled(scrollPosition > 50);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

return(
    <header ref={headerRef} className={scrolled ? 'scrolled' : ''}  >
		  
    <nav  ref={navRef} style={scrolled ?{color:'white'}  : {}}>
        <a href="/#"  style={scrolled ?{color:'white'}  : {}}>Home</a>
        <a href="/#" style={scrolled ?{color:'white'}  : {}}>Gallery</a>
        <a href="/" style={scrolled ?{color:'white'}  : {}}>About us</a>
        <button className="button-35" role="button">Plans & Prices</button>
        <span className=" form-item-icon material-symbols-outlined" style={{fontSize:'2rem' , paddingLeft:'20px'}}>
       person</span>
        <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
        </button>
    </nav>
    <button
        className="nav-btn"
        onClick={showNavbar }>
        <FaBars />
    </button>
    
</header>
)

}