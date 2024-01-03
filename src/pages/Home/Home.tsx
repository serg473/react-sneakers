import {Card, Container, Divider} from '@mui/material'
import {SwiperSlide} from "swiper/react";
import {CgProfile} from 'react-icons/cg'
import {MdFavoriteBorder} from 'react-icons/md'
import {SlBasket} from 'react-icons/sl'
import Logo from '../../assets/logo.svg'
import MenuProfile from '../../components/MenuProfile/MenuProfile'
import Styles from './Home.module.scss'
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import Banner from '../../assets/slide-banner.png'

const Home = () => {
    return (
        <>
            <Container
                className='container'
            >
                <header className={Styles.header}>
                    <div className={Styles.header__logo}>
                        <img src={Logo} alt='Sneakers'/>
                        <div className={Styles.header__names}>
                            <h4>REACT SNEAKERS</h4>
                            <span>Магазин лучших кроссовок</span>
                        </div>
                    </div>
                    <div className={Styles.header__menu}>
                        <MenuProfile>
                            <div className={Styles.header__menuItem}>
                                <SlBasket size='18px' color='#9B9B9B'/>
                                <span>1205 руб</span>
                            </div>
                            <div className={Styles.header__menuItem}>
                                <MdFavoriteBorder size='18px' color='#9B9B9B'/>
                                <span>Закладки</span>
                            </div>
                            <div className={Styles.header__menuItem}>
                                <CgProfile size='18px' color='#9B9B9B'/>
                                <span>Профиль</span>
                            </div>
                        </MenuProfile>
                    </div>
                </header>
                <Divider/>
                <Card sx={{p: '0 60px', boxShadow: 'none', m: '45px 0 0 0'}}>
                    <BannerSlider>
                        <SwiperSlide><img width="100%" src={Banner}/></SwiperSlide>
                        <SwiperSlide><img width="100%" src={Banner}/></SwiperSlide>
                        <SwiperSlide><img width="100%" src={Banner}/></SwiperSlide>
                        <SwiperSlide><img width="100%" src={Banner}/></SwiperSlide>
                    </BannerSlider>
                </Card>
            </Container>
        </>
    )
}

export default Home
