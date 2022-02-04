import React from 'react';
import {useSelector} from "react-redux";
import {selectors} from "../store/userData";

const Resume = () => {

    const education = useSelector(selectors.getEducation)
    const work = useSelector(selectors.getWork)
    const skills = useSelector(selectors.getSkills)
    const skillmessage = useSelector(selectors.getSkillsMessage)


    return (
        <section id="resume">

            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Образование</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {
                                education.map(edu => {
                                    console.log(edu)
                                    return (
                                        <div key={edu.school}>
                                            <h3>{edu.school}</h3>
                                            <p className="info">{edu.degree}
                                                <span>&bull;</span>
                                                <em className="date">{edu.graduated}</em>
                                            </p>
                                            <p>{edu.description}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Работа</span></h1>
                </div>
                <div className="nine columns main-col">
                    {
                        work.map(workItem => {
                            return (
                                <div key={workItem.company}>
                                    <h3>{workItem.company}</h3>
                                    <p className="info">{workItem.title}
                                        <span>&bull;</span>
                                        <em className="date">{workItem.years}</em>
                                    </p>
                                    <p>{workItem.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Умения</span></h1>
                </div>
                <div className="nine columns main-col">
                    <p>{skillmessage}</p>
                    <div className="bars">
                        <ul className="skills">
                            {
                                skills.map(skillItem => {
                                    const className = `bar-expand ${skillItem.name.toLowerCase()}`;
                                    return (
                                        <li key={skillItem.name}>
                                            <span style={{width:skillItem.level}} className={className}></span>
                                            <em>{skillItem.name}</em>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
