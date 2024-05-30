import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';


const marks = [
    {
      value: 1998,
      label: '1998',
    },
    {
      value: 1999,
      label: '1999',
    },
    {
      value: 2001,      
      label: '2001',
    },
    {
      value: 2004,      
      label: '2004',
    },
    {
      value: 2005,
      label: '2005',
    },
    {
      value: 2006,
      label: '2006',
    },
    {
      value: 2008,
      label: '2008',
    },
    {
      value: 2011,
      label: '2011',
    },
    {
      value: 2015,
      label: '2015',
    },
    {
      value: 2017,
      label: '2017',
    },
    {
      value: 2018,
      label: '2018',
    },
    {
      value: 2019,
      label: '2019',
    },
    {
      value: 2021,
      label: '2021',
    },
    {
      value: 2023,
      label: '2023',
    }

  ];

  const scale = value => {
    return value;
  };
  
  function numFormatter(num) {
    return `${num}`;
  }
  
  function valuetext(value) {
    return `${value}`;
  }

export const SliderPOC = ({ scrollValue, onScrollChange }) => {
   const [value, setValue] = React.useState(2023);
  
  const handleChange = (event, newValue) => {
    setValue(newValue - 1998);
  };

  return (
    <div style={{textAlign: 'center', backgroundColor: 'rgba(255,255,255, 60%)', width: '100%'}}>
      <Box display="flex" flexDirection="column" m={5}>
        <Slider 
          min={1998}
          max={2023}
          defaultValue={2023}
          valueLabelFormat={numFormatter}
          marks={marks.sort((a, b) => (a.value > b.value) ? 1 : -1)}
          getAriaValueText={valuetext}
          aria-label="Custom marks"
          // step={null}
          valueLabelDisplay="on"
          // aria-label="Restricted values"
          value={scrollValue}
          onChange={onScrollChange}
          aria-labelledby="work-experience-slider"
        />

      </Box><Typography id="non-linear-slider" gutterBottom>Experience year: {scrollValue}</Typography>
  </div>
    )
}
export default SliderPOC;

