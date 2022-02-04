import React from 'react';
import {useSelector} from "react-redux";
import * as selectors from "../store/userData/selectors";

const Footer = () => {

    const social = useSelector(selectors.getNetworks)
    console.log(social)

    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        {
                            social && social.map((network) =>
                                <li key={network.name}>
                                    <a href={network.url}><i className={network.className}></i></a>
                                </li>
                            )
                        }
                    </ul>

                    <ul className="copyright">
                        <li>&copy; Copyright 2022 Alex</li>
                        <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                    </ul>

                </div>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i
                    className="icon-up-open"></i></a></div>
            </div>
        </footer>
    );
}

export default Footer;
