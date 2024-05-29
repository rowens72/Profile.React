
import React, { useState } from 'react';

import EducationData from '../Data/EducationData.json'


const Education = () => {
    const [data, setData] = useState(EducationData)

    return (
        <div style={{backgroundColor: 'rgba(255, 255, 255, 60%)'}}>
            <ul>
            {data.map((edu, index) => { 
                // console.log(exerience.duties)
                return <li>
                    <b>{edu.school}</b>, {edu.course}, {edu.location} ({edu.date})
                </li>

                })}
            </ul>
        </div>
    )
}

export default Education;