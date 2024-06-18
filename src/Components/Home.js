import "./scss/home.scss";

import htmlImage from '../assets/images/html.png';
import reactHeader from '../assets/images/reactHeader.png';
import reactImage from '../assets/images/react.png';
import csharpImage from '../assets/images/Csharp.png';
import nodeImage from '../assets/images/node.png';
import sqlImage from '../assets/images/sql.png'
import javascriptImage from '../assets/images/JS.png';
import cssImage from '../assets/images/css.png';
//import heroImage from './assets/images/homepageBackground.png';
//import heroWhiteImage from './assets/images/homepageBackground.png';

const techImage = {
   width:'200px',
    marginTop: "3rem",
}

function Home(){
    return (
        <>
           <div className="hero">
                
            {/* <div className="area" > */}
                        <ul className="circles">
                                <li><img src={htmlImage} alt='html' className='htmlLogo' style={techImage} /></li>
                                <li></li>
                                <li></li>
                                <li><div className="reactDiv">
                                        <div style={{margin: '1rem', justifySelf: 'center'}}>
                                            <img src={reactHeader} alt='React JS' />
                                        </div>
                                        <div style={{marginTop: '-.5rem'}}>
                                            <img src={reactImage}  alt='React js' className='reactLogo'/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                <img src={csharpImage}  alt='C#' className='csharpLogo' style={techImage}/> 
                                </li>
                                <li><img src={sqlImage}  alt='SQL' className='sqlLogo' style={techImage}/></li>
                                <li>
                                <img src={javascriptImage} alt='JavaScript' className='jsLogo' style={techImage}/>
                                </li>
                                <li></li>
                                <li><img src={cssImage}   alt='CSS' className='cssLogo' style={techImage} /></li>
                                <li>
                                <img src={nodeImage}  alt='Node JS' className='nodeLogo' style={techImage}/>    
                                </li>
                        </ul>
            </div> 
        </>
    )
}

export default Home