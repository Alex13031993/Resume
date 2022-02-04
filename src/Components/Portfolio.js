import React from "react";

const Portfolio = () => {

    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1 style={{fontFamily: 'Roboto', fontSize: '18px'}}>Мои работы на GitHub</h1>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        <h4>Примеры работ:</h4>
                        <a href="http://g914399k.beget.tech/portfolio" target='_blank'>http://g914399k.beget.tech/portfolio</a><br/>
                        <a href="http://g914399k.beget.tech/" target='_blank'>http://g914399k.beget.tech/</a>
                        <h4>Исходный код на Github:</h4>
                        <a href="https://github.com/Alex13031993/my-app" target='_blank'>https://github.com/Alex13031993/my-app</a><br/>
                        <a href="https://github.com/Alex13031993/Resume.git" target='_blank'>https://github.com/Alex13031993/Resume.git</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
