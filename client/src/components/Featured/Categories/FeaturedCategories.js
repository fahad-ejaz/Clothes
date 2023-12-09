import { useContext } from "react";
import { FeatureCategoryContext } from "../../../Context/FeaturedCategoryContext";
import CategoryCard from "../../Card/FeaturedCard/CategoryCard";
import './FeaturedCategories.css'
import { useParallax } from "react-scroll-parallax";
import { useMediaQuery } from 'react-responsive';


const Categories = () => {
    
    const parallax = useParallax({
        // translateY: ["],
        // translateX: [-30, 30],
        opacity: [0.7,1.5],
        scale: [1, 1, "easeOutCubic"],
        // shouldAlwaysCompleteAnimation: true,
        // expanded: false,
      });
      const parallax2 = useParallax({
        // speed: 100,
        // translateY :[30,-20],
        scale: [0.4, 1],
        opacity: [0.3,1.5],
        // translateX: [-10, 10],
        
      });

      const featuredCategories = useContext(FeatureCategoryContext)

      
    
    return ( 
        <div ref={parallax.ref} className="featured__categories__container min-vh-100 w-100">
            <div ref={parallax2.ref} className="featured__categories">
                <div className="featured__categories__header">
                    <h1 className='featured__header__big'>Featured Categories </h1>
                    <div className="featured__categories__header__line"></div>
                </div>
                <div className="featured__categories__card__container">
                    { featuredCategories.map((category) =>  <CategoryCard key={category.id} data={category}/>)}
                </div>
            </div>
        </div>  
     );
}
 
export default Categories;