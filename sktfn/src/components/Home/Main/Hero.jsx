import React  , {useRef , useState , useEffect} from 'react'

import '../../../style/homeStyle/hero.css'
import { FaBars, FaTimes } from "react-icons/fa";
import "../../../style/navbar.css"
import { useNavigate } from 'react-router-dom';
import { IoLogInOutline } from "react-icons/io5";
import { IoLogIn } from "react-icons/io5";
  const MyHero = () => {
    const navRef = useRef();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
	  const toggleMenu = () => {
	  setShowMenu(!showMenu);
	};
	   const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
    const headerRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
        
  const loginSend = () => {
    navigate('/login');
  };
  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array to run this effect only once on mount

  // Define your state value based on screen width
  const [stateValue, setStateValue] = useState(false);

  useEffect(() => {
    if (screenWidth < 768) {
      setStateValue(false);
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      setStateValue(false);
    } else {
      setStateValue(true);
    }
  }, [screenWidth]);

  
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
  return (
  <div className='first'>
  <header ref={headerRef} className={scrolled ? 'scrolled' : ''}  >
		  
          <nav  ref={navRef} style={scrolled ?{color:'white'}  : {}}>
             <a href="/#"  style={scrolled ?{color:'white'}  : {}}>Home</a>
              <a href="/#" style={scrolled ?{color:'white'}  : {}}>Gallery</a>
              <a href="/" style={scrolled ?{color:'white'}  : {}}>About us</a>
              <button className="button-35" role="button">Plans & Prices</button>
        {stateValue ? ( <span className=" form-item-icon material-symbols-outlined" style={{fontSize:'2rem' , paddingLeft:'20px'}} onClick={toggleMenu}>
             person</span>) : <ul className="menu-dropdown">
			<li><IoLogInOutline className='icon' style={{ fontSize: '24px' }}  /><button style={{fontWeight: '750'}} onClick={loginSend}>Log in</button></li>
		  </ul>}     
             {showMenu && (
		  <ul className="menu-dropdown">
			<li><IoLogInOutline className='icon' style={{ fontSize: '24px' }}  /><button style={{fontWeight: '750'}} onClick={loginSend}>Log in</button></li>
		  </ul>
		)}
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
    <div className='hero'>
    <div className='content'>
    <p className='p-2'>Mirë se vini në patinazh në Tiranë!
      Jeni të mirëpritur të bashkoheni me ne
      Në një jurnie të veçantë të slidign
      Aty ku pranohet vetëm argëtimi</p>
        <button href='/' className='button-89' >About us</button>
    </div>
</div>
</div>
  
         
  
  
  );
};

export default MyHero