import React, { Fragment } from 'react'
import AboutMe from 'component/Views/Home/AboutMe'
import Experience from 'component/Views/Home/Experience'
import Skill from 'component/Views/Home/Skill'
import Education from 'component/Views/Home/Education'
import GetInTouch from 'component/Views/Home/GetInTouch'

const Home = () => {
    return (
        <Fragment>
            <AboutMe />
            <Experience />
            <Skill />
            <Education />
            <GetInTouch />
        </Fragment>
    )
}

export default Home
