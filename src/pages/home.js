import React, {useState} from 'react'
import './home.css';
import Boxes from '../components/box'
import Card from '../components/card/card'
import MouseTooltip from 'react-sticky-mouse-tooltip';
import {Link} from 'react-router-dom';




function Home() {

    const [hover, setHover] = useState(false)
    //const history = useHistory();

    return (
        <div className='home-container' id='intro'>
             <MouseTooltip
             visible={hover}
            offsetX={15}
            offsetY={10}
             >
                <span className='cursor-tooltip'>Drag to rotate canvas and scroll to zoom in/out</span>
            </MouseTooltip>
            <div className='intro-container'>
                <div className="intro-block">
                    
                    <span className='intro-hero'>Hey, I'm David.</span>
                    {/* <p className='intro-body'>During the day, I am a product manager building Eno,<br></br> a conversational AI platform at Capital One. <br></br>
                    At night, I'm a first-year Human-Centered Design graduate student at University of Washington.<br></br>
                    Previously, I was a senior software engineer at Capital One. </p> */}
                    <p className='intro-body'>
                    At night, I'm a <strong className= 'strong-white'>first-year Human-Centered Design graduate student </strong> at University of Washington.
                    <br></br>
                    <br></br>
                    During the day, I'm a <strong className= 'strong-white'>software-engineer-turned-product-manager</strong> building a conversational AI platform at Capital One. 
                    <br></br>
                    </p>
                    <Link to='/about' className='link-more'> More about me</Link>

                </div>
                <div className= "canvas-block" 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >
                    <Boxes></Boxes>
                </div>
            </div>
            <div className= 'project-container' id='work'>
                {/* <div className= 'section-title'> 
                <span className= 'title-text'>Product Design</span>
                </div> */}
                <div className= 'card-container'>
                <Card className = 'card-item' title='InterEd' content= 'A solution for remote K-12 classrooms' project={3} ></Card>

                    <Card  title='Resi' content= 'Re-imagining restaurant reservation amid COVID-19' project={1} ></Card>
                    <Card className = 'card-item' title='Deephire' content= 'New onboarding experience for a video-interview start-up' project={2} ></Card>

                </div>
            </div>
            <div className= 'smaller-project-container' style={{backgroundColor: '#f8f8f8'}} id='explore'> 
                {/* <div className= 'section-title'> 
                <span className= 'title-text'>Product Design</span>
                </div> */}
                <p className='container-title'>
                    Creative Computing
                    <br/>
                    <span className='container-title-description'> As a computer scientist in love with art, I like to explore ways for other traditionally "non-artsy" people to enjoy creating art.</span>
                </p>
                <p>
                    
                </p>
                <div className= 'smaller-card-container'>
                    <div className='item-1'>
                        <Card  title='Generative Art Simulator' content= 'React, ThreeJS, React-Three-Fiber' project={6}  link= 'https://gen-art-simulator.netlify.app/' secondContent={['github repo','https://github.com/dkkimdk/Gen-art-simulator']}></Card>
                    </div>
                    <div className='item-3'>
                    <Card title='Generative Art: Untitled' content= 'ThreeJS, WebGL' project={4} link='https://github.com/dkkimdk/generative-art/blob/master/webgl.js' ></Card>
                    </div>
                    <div className='item-4'>
                    <Card title='Generative Art: Mind' content= 'ThreeJS, GLSL' project={5} link='https://github.com/dkkimdk/generative-art/blob/master/shader.js' ></Card>
                    </div>
                </div>
                <div className='link-container'>
                <a className='link-git' style={{color:'black'}} href="https://github.com/dkkimdk">View my git repo →</a>
                </div>
            </div>
            <div className= 'smaller-project-container' style={{backgroundColor: 'white'}} id='explore'> 
                {/* <div className= 'section-title'> 
                <span className= 'title-text'>Product Design</span>
                </div> */}
                <p className='container-title'>
                    Weekend Tinkers
                    <br/>
                    <span className='container-title-description'> I love making things with code (often for no reason). Mostly in-progress.</span>
                </p>
                <p>
                    
                </p>
                <div className= 'smaller-card-container'>
                    <div className='item-1'>
                        <Card title='Remind Bot' content= 'React, NodeJS, AWS SNS, Heroku' project={7} link= 'https://remindbot-app.herokuapp.com/'></Card>
                    </div>
                </div>
                <div className='link-container'>
                <a className='link-git' style={{color:'black'}} href="https://github.com/dkkimdk">View my git repo →</a>
                </div>
            </div>
            <div className= 'bottom-footer'>
            <span className='footer-message'>Made with &hearts; by David</span>
            <div className='social-media'> 
                <a className='social-media-link' href='https://www.linkedin.com/in/david-kim-b21156108/'>linkedin</a>
                <a className='social-media-link' href='https://github.com/dkkimdk'>github</a>
            </div>
            </div>
        
        </div>
    )
}

export default Home;