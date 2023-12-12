import './Landing.css'
import land from '../../asset/brand/men2.png'
import { Link } from "react-router-dom"
import { Button } from "@mui/material";
import { useParallax } from 'react-scroll-parallax';
import { Container } from '@mui/material';

import { Box } from '@mui/material';
import { Grid} from '@mui/material';

const Landing = () => {
    const parallax = useParallax({
        // translateY: [0, 5],
        // rotateY: [0, 60],
        opacity: [1.5, 0.3],
        scale: [0.7, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
      });
      const parallax2 = useParallax({
     
        // rotateY: [0, 30],

       
      });
      const parallax3 = useParallax({
     
        // rotateY: [0, 60],

       
      });
    return ( 
       
        <div ref={parallax.ref} className="landing__container min-vh-100 w-100">
            
            <div  className="landing__header__container">
               
                <div ref={parallax2.ref} className="landing__header">
                    <h3 className="landing__header__discount">UP TO 15% DISCOUNT</h3>
                    <h1 className="landing__header__main">Checkout The Best Fashion Style</h1>
                    <Link to="/shop">
                        <Button variant='outlined' sx={[ {width: '190px', height: '50px', borderRadius: '20px' , fontWeight: '700', backgroundColor: 'none', borderColor: 'black', color: 'black' }, {'&:hover': {  backgroundColor: "black" , color: "#FFE26E", borderColor: 'black'}}]}>SHOP NOW</Button>
                    </Link>
                </div>
            </div>
            <div ref={parallax3.ref} className="landing__image__container">
                <img className="landing__image" src={land} alt=""/>
            </div>
       
        </div>
        
        
     );
}
 
export default Landing;