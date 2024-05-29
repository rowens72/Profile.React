import "./Resume.css";
import Card from 'react-bootstrap/Card'
import Badge from './Badge'

function About() {
    return (

            <div className="hero-white">
                <div className='container'>
                    <div className='card'>
                        <div className='cardHeader blockquote mb-0 card-body'>
                            About me
                        </div>
                        <div className='cardBody'>
                            <Card.Img style={
                                    {
                                        width: '12%',
                                        margin: '0 auto',
                                        borderRadius: '50%',
                                        border: '1px solid black'
                                    }
                                }
                                variant="bottom"
                                src="./assets/images/photo_bw.png"
                                alt="Ron Owens"/>
                                  <div  style={{backgroundColor: 'RGB(255, 255, 255, 60%)'}}>
                                    Innovative, confident Technical Professional with years of progressive experience including web services skills.  Adept at pointing out observed issues to help others lead all phases of back-end development.  Well-versed in acclimating to new technologies such as C#, React, Redux, Nodejs and MongoDB while also dabbling in areas with more experience such as JavaScript and CSS. Now seeking a role that will allow for career growth and learning pertinent to new technologies. 
                                  </div>
                        </div>
                        <Badge/>
                    </div>
                </div>
            </div>

    );
}

export default About;
