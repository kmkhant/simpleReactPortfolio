import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection';
import SkillSection from '../Components/SkillSection';
import ServiceSection from '../Components/ServiceSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillSection skill={'Python'} progress={'90%'} width={'90%'} />
                <SkillSection skill={'Lua'} progress={'40%'} width={'40%'} />
                <SkillSection skill={'Java'} progress={'80%'} width={'80%'} />
                <SkillSection skill={'Web Design'} progress={'25%'} width={'25%'} />
                <SkillSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
            </div>

            <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServiceSection image={design} title={'Web design'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServiceSection image={intelligence} title={'Artificial Intelligence'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServiceSection image={gamedev} title={'Game Development'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;