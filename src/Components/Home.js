import "./home.css";


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
                                <li><img src='./assets/images/html.png'  alt='html' className='htmlLogo' style={techImage} /></li>
                                <li></li>
                                <li>
                                
                                </li>
                                <li> <div className="reactDiv">
                                        <div style={{margin: '1rem', justifySelf: 'center'}}>
                                            <img src='./assets/images/reactHeader.png' alt='React JS' />
                                        </div>
                                        <div style={{marginTop: '-.5rem'}}>
                                            <img src='./assets/images/react.png'  alt='React js' className='reactLogo'/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                <img src='./assets/images/node.png'  alt='Node JS' className='nodeLogo' style={techImage}/>    
                                </li>
                                <li><img src='./assets/images/sql.png'  alt='SQL' className='sqlLogo' style={techImage}/></li>
                                <li>
                                <img src='./assets/images/js.png'  alt='JavaScript' className='jsLogo' style={techImage}/>
                                </li>
                                <li><img src='./assets/images/csharp.png'  alt='C#' className='csharpLogo' style={techImage}/></li>
                                <li></li>
                                <li>
                                    <img src='./assets/images/css.png'   alt='CSS' className='cssLogo' style={techImage} />
                                </li>
                        </ul>
            </div> 
        </>
    )
}

export default Home