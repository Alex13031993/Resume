import React from 'react';
import {useSelector} from "react-redux";
import * as selectors from "../store/userData/selectors";


const About = () => {

    const {name, bio, email, phone, address, resumeDownload} = useSelector(selectors.getUserData)
    const {city, state} = address
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" style={{width: '145px', height: '200px', borderRadius: '5px'}} src="images/person.jpg" alt="Profile Pic"/>
                </div>
                <div className="nine columns main-col">
                    <h2>О Себе</h2>
                    <p>{bio}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Контакты</h2>
                            <p className="address">
                                <span>{name}</span><br/>
                                <span>{state}<br/>
                                    {city}
                                </span><br/>
                                <span>{phone}</span><br/>
                                <span>{email}</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Загрузить резюме</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default About;
