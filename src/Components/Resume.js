import React,{useState, useRef} from 'react';

import "./Resume.css"; 
import Experience from "./Experience"
import Education from "./Education"
import Slider from "./Slider"

const skills = ['C#', 'ASP.Net', 'SQL Server',  
'JavaScript', 'HTML', 'VB.NET', 
'JQuery', 'CSS', 'SASS', 'Bootstrap', 
'Node JS', 'Express JS', 'SignalR', 
'REST', 'Web Services',	'React', 'Typescript', 'GitHub', 'TFS', 'TeamCity', "SSIS"];


function Resume(){
     const listItems = skills.map((skill) =><li key={skill}>{skill}&nbsp;&nbsp;</li>);
     const [scrollValue, setScrollValue] = useState(2023);
     const [scrollPositions, setScrollPositions] = useState([]);
     const [scrollToPosition, setScrollToPosition] = useState(0);
   
     const handleScrollChange = (event, newValue) => {
       setScrollValue(newValue);
       const index = newValue - 1998;
       setScrollToPosition(scrollPositions[index]);
     };

     return(
        <div className="hero-white">
            <div>
                <div className='container'>
                    <div>
                        <div className='cardHeader blockquote mb-0 card-body'>Summary</div>
                        <div className='cardBody'>
                            <div className='cardText' >
                                <div  style={{backgroundColor: 'RGB(255, 255, 255, 60%)'}}>
                                    Enthusiastic Full Stack Engineer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of web development and training in HTML, CSS, JavaScript, Node JS, React JS, C#, .Net Framework, and SQL Server.  Motivated to learn, grow and excel in web application development.
                                </div>                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div>
                        <div className='cardHeader blockquote mb-0 card-body'>Skills</div>
                        <div className='cardBody'>
                            <div className='cardText'>
                            <div>
                                <ul className='listCols'>
                                    {listItems}
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div>
                        <div className='cardHeader blockquote mb-0 card-body'>Education</div>
                        <div className='cardBody'>
                            
                            <div className='cardText'>
                            <div>
                                <Education />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div style={{width: '100%'}}>
                        <div className='cardHeader blockquote mb-0 card-body' >
                            Career History
                        </div>
                        <Slider scrollValue={scrollValue} onScrollChange={handleScrollChange} ></Slider>                
                        <div className='cardBody'>
                            <div className='cardText'> 
                                <div >
                                    <Experience scrollValue={scrollValue} 
                                                setScrollPositions={setScrollPositions} 
                                                scrollToPosition={scrollToPosition}  />                               
                                 </div>  
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
} 

export default Resume;