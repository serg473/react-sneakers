import React from 'react';
import Styles from './MenuProfile.module.scss'

const MenuProfile = (props:any) => {
    return (
        <nav className={Styles.nav}>
            {props.children}
        </nav>
    );
};

export default MenuProfile;