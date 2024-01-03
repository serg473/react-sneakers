import { Swiper } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';

const BannerSlider = (props) => {
	return (
		<Swiper
            className="swiper"
			spaceBetween={30}
			slidesPerView={1}
			modules={[Autoplay, Navigation]}
			navigation={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
		>
            {props.children}
		</Swiper>
	)
}

export default BannerSlider
