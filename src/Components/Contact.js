import React from 'react';
import {useSelector} from "react-redux";
import * as selectors from "../store/userData/selectors";

const Contact = () => {

    const {name, contactmessage, phone, address} = useSelector(selectors.getUserData)
    const {city, state} = address

    const handleChange = () => {}
    return (
        <section id="contact">
            <div className="row section-head">
                <div className="two columns header-col">
                    <h1><span>Get In Touch.</span></h1>
                </div>
                <div className="ten columns">
                    <p className="lead" style={{color: '#f06000'}}>{contactmessage}</p>
                </div>
            </div>

            <div className="row">
                <div className="eight columns">
                    <form action="" method="post" id="contactForm" name="contactForm">
                        <fieldset>
                            <div>
                                <label htmlFor="contactName">Имя <span className="required">*</span></label>
                                <input type="text" defaultValue="" size="35" id="contactName" name="contactName"
                                       onChange={handleChange}/>
                            </div>
                            <div>
                                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail"
                                       onChange={handleChange}/>
                            </div>
                            <div>
                                <label htmlFor="contactMessage">Сообщение <span className="required">*</span></label>
                                <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                            </div>

                            <div>
                                <button className="submit" style={{background: '#f06000', letterSpacing: '1px'}}>Send</button>
                                <span id="image-loader">
                        <img alt="" src="images/loader.gif"/>
                     </span>
                            </div>
                        </fieldset>
                    </form>

                    <div id="message-warning"> Error</div>
                    <div id="message-success">
                        <i className="fa fa-check"></i>Ваше сообщение отправлено, спасибо!<br/>
                    </div>
                </div>


                <aside className="four columns footer-widgets">
                    <div className="widget widget_contact">

                        <h4>Адрес и Телефон</h4>
                        <p className="address">
                            {name}<br/>
                            {city}, {state} <br/>
                            <span>{phone}</span>
                        </p>
                    </div>

                    <div className="widget widget_tweets">
                        <h4 className="widget-title">Последние Записи</h4>
                        <ul id="twitter">
                            <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum<br/>
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                                <b><a href="#">2 дня назад</a></b>
                            </li>
                            <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi<br/>
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                                <b><a href="#">3 дня назад</a></b>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </section>
    );
}

export default Contact;
