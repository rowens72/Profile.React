import React,{useState} from 'react';

import Experience from "./Experience"
import Education from "./Education"
import Slider from "./Slider"
import "./scss/resume.scss"; 

import ResumePdf from './ronowens2024.pdf';
import ResumePdfImaage from '../assets/images/downloadImage.png'


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
                <div className='container'>
                    <div>
                        <div className='cardHeader blockquote mb-0 card-body'>Download resume</div>
                            <div className='cardBody'>
                                <div className='cardText' >
                                    <div style={{backgroundColor: 'RGB(255, 255, 255, 60%)', width: '100%'}}>
                                    <div style={{ display:'flex'}}>
                                        <div>
                                            <div style={{paddingtop:'5px'}}><a href={ResumePdf}
                                            download="Ron Owens 2024.pdf"
                                            target="_blank"
                                            rel="noreferrer">Ron Owens 2024.pdf</a>
                                            </div>
                                            <div>Updated date: 5/8/2024</div>
                                        </div>
                                        <div><a href={ResumePdf}
                                            download="Ron Owens 2024.pdf"
                                            target="_blank"
                                            rel="noreferrer">
                                                <img src={ResumePdfImaage} alt='Download Resume (PDF)' width='40' style={{textAlign: 'left', marginLeft: '25px'}} /> 
                                            </a>
                                        </div>
                                    </div>                                    
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