import React from 'react';
import {useSelector} from "react-redux";
import * as selectors from "../store/userData/selectors";

const Header = () => {

    const {name, description, address} = useSelector(selectors.getUserData)
    const networks = useSelector(selectors.getNetworks)
    const occupation = useSelector(selectors.getOccupation)
    const {city} = address

    return (
        <header id="home">

            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav" style={{fontSize: '14px', fontFamily: 'Roboto'}}>
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">Обо мне</a></li>
                    <li><a className="smoothscroll" href="#resume">Резюме</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Работы</a></li>
                    <li><a className="smoothscroll" href="#testimonials">Рекомендации</a></li>
                    <li><a className="smoothscroll" href="#contact">Контакты</a></li>
                </ul>
            </nav>

            <div className="row banner">
                <div className="banner-text">
                    {
                        <React.Fragment>
                            <h1 className="responsive-headline">{name}</h1>
                            <h3 style={{fontFamily: 'Roboto', fontSize: '16px'}}>Я из города {city}<span>{occupation}</span>. {description}.</h3>
                            <hr/>
                            <ul className="social">
                                {networks}
                            </ul>
                        </React.Fragment>
                    }
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

        </header>
    );
}

export default Header;
