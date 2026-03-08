import Homebanner from '../../Component/Homebanner/index'
import HomeCat from '../../Component/HomeCat/index'
import ProductItem from '../../Component/ProductItem/index'
import { Swiper, SwiperSlide } from 'swiper/react' 
import { Navigation } from 'swiper/modules'

// Styles
import 'swiper/css'
import 'swiper/css/navigation'

const Home = () => {
    return (
        <>   
            <Homebanner/>
            <HomeCat/>

 
        </>
    )
}

export default Home