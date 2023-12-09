import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Landing from "../components/Landing/Landing";
import FeaturedItems from "../components/Featured/Items/FetauredItems";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import { TabTitle } from "../utils/General";
import { Parallax } from "react-scroll-parallax";
import { useParallax } from 'react-scroll-parallax';



const Home = () => {
   
    // const parallax = useParallax({ rotate: [0, 360]});
    const [ featuredItems, setFeaturedItems ] = useState()
    // TabTitle("Home - Shema");

    useEffect(() => {
        axios.get("https://shema-backend.vercel.app/api/items")
            .then(res => setFeaturedItems(res.data))
            .catch(err => console.log(err))

        window.scrollTo(0, 0)
    }, [])

    return ( 
            <Fragment>
                <Landing />
                <FeaturedCategories />
                <FeaturedItems items={featuredItems}/>
            </Fragment>
      
        
    );
}
 
export default Home;