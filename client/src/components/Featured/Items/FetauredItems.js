import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ItemCard from '../../Card/ItemCard/ItemCard';
import ReactLoading from 'react-loading';
import './FeaturedItems.css'
import { useParallax } from "react-scroll-parallax";
import wood from '../../../asset/img/wood.avif'

const FeaturedItems = (props) => {
    let w = window.innerWidth;
    
    console.log(w)
    const parallax = useParallax({
        // translateY: [10,50],
        // easing: 'easeOutQuad',
        // speed: 200,    
        // startScroll:4000,

        // endScroll: 5600,
        opacity: [0,1],
        // shouldAlwaysCompleteAnimation: true,
        // translateX: [0, w/2/10]
    });
    const parallax2 = useParallax({
        // translateY: [20, -5],
        // speed:    200,
        // startScroll: 50,
        // endScroll: 5000
         
    });
    // const parallax3 = useParallax({
    //     // translateY: [10, -10],
    //     speed: 200,

    //     // opacity: [0, 1, 'easeOutQuad']
    // });
    return (
        <div className="featured__products__container">
            
            <div className="featured__products">
                <div ref={parallax.ref} className="featured__products__header">
                    <div className="">
                        <h3 className='featured__items__header__big'>Featured Items </h3><Link to="/shop" className='featured__header__small'>Show all<ArrowRightAltIcon /></Link>
                    </div>
                    <div className="featured__products__header__line"></div>
                </div>
                <div ref={parallax2.ref} className="featured__products__card__container">
                    {!props.items && <ReactLoading type="balls" color='#FFE26E' height={100} width={100} className='' />}
                    {props.items &&
                        // <div className="featured__products__card__container d-flex flex-row min-vh-100 w-100 justify-content-start align-items-start ">
                        <div className="featured__products__cards">
                            <ItemCard item={props.items[0]} category="featured" />
                            <ItemCard item={props.items[4]} category="featured" />
                            <ItemCard item={props.items[10]} category="featured" />
                            <ItemCard item={props.items[20]} category="featured" />
                            <ItemCard item={props.items[16]} category="featured" />
                            <ItemCard item={props.items[5]} category="featured" />
                            <ItemCard item={props.items[13]} category="featured" />
                            <ItemCard item={props.items[23]} category="featured" />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default FeaturedItems;