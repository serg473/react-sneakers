import React from 'react';
import Logo from '../../assets/logo.svg'
import Styles from './Home.module.scss'
import MenuProfile from "../../components/MenuProfile/MenuProfile";
import { SlBasket } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Home = () => {
    return (
        <header className={Styles.header}>
            <div className={Styles.header__logo}>
                <img src={Logo} alt="Sneakers"/>
                <div className={Styles.header__names}>
                    <h4>REACT SNEAKERS</h4>
                    <span>Магазин лучших кроссовок</span>
                </div>
            </div>
            <div className={Styles.header__menu}>
                <MenuProfile>
                    <div className={Styles.header__menuItem}>
                        <SlBasket size="18px" color="#9B9B9B"/>
                        <span>1205 руб</span>
                    </div>
                    <div className={Styles.header__menuItem}>
                        <MdFavoriteBorder size="18px" color="#9B9B9B"/>
                        <span>Закладки</span>
                    </div>
                    <div className={Styles.header__menuItem}>
                        <CgProfile size="18px" color="#9B9B9B"/>
                        <span>Профиль</span>
                    </div>
                </MenuProfile>
            </div>
        </header>
    );
};

export default Home;