import React from 'react';

const ImageComponent = ({ imagePath }) => {
  // Using require to dynamically import the image
  const image = require(`${imagePath}`).default;

  return (
    <>
      <img src={image} alt="Dynamic" />
    </>
  );
};

export default ImageComponent;
