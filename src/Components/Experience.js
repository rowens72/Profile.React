import React, {useState, useRef, useEffect} from 'react';
import {Card, Img} from 'react-bootstrap'
import './Resume.css';
import ExperienceData from '../Data/Experience.json'

const Experience = ({ scrollValue, setScrollPositions, scrollToPosition }) => {
  const [data, setData] = useState(ExperienceData.sort((a, b) => (a.when > b.when) ? 1 : -1))  
  const workExperienceRef = useRef(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (workExperienceRef.current) {
      const sectionElements = workExperienceRef.current.querySelectorAll('#experince');
      const positions = Array.from(sectionElements).map(section => section.offsetTop);
      setSections(positions);
      setScrollPositions(positions);
    }
  }, [setScrollPositions]);

  useEffect(() => {
    if (workExperienceRef.current && sections.length > 0) {
      workExperienceRef.current.scrollTop = scrollToPosition;
    }
  }, [scrollToPosition, sections]);
 
  return (
    <section className="work-experience-section">
      <div className="work-experience" ref={workExperienceRef}>
      {data.map((exerience, index) => { 
                return <><div id="experince">
                  <Card key={index} style={{ border: '1px solid #000' }}>
                    <Card.Body id='Card'>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Card.Img variant="top" src={exerience.image} style={{ border: '1px solid #000' }} />
                      </div>
                      <div key={index} style={{ width: '100%', marginLeft: '1rem' }}>
                        <Card.Title style={{ paddingLeft: '.5em', lineHeight: '1em', verticalAlign: 'top', paddingBottom: '0.75rem', width: '100%', display: 'flex', backgroundColor: "rgb(3, 14, 33, 60%)", color: "#fff", height: "26px", margin: "3px" }}>
                          <h5 style={{ fontWeight: 'bold', lineHeight: '1.35em', verticalAlign: 'top', textAlign: 'left', }}>{exerience.company}</h5>
                          <p style={{ lineHeight: '1.95em', verticalAlign: 'top' }}> &nbsp;| <i>{exerience.title}</i>&nbsp;&nbsp;| &nbsp;{exerience.location}  {exerience.when}</p>
                        </Card.Title>
                        <ul style={{ lineHeight: '20px', position: 'relative', top: "-18px", margin: "22px" }}>
                          {exerience.duties.map((item, index) => { return <li key={index}>{item.text}</li>; })}
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>
                </div><br /><br /><br /></>})}
      </div>
    </section>
  );
};

export default Experience;