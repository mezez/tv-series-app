import React from 'react';
import loaderSrc from '../../assets/loader.gif'

let imageStyle = {
    width: 30
};
const Loader = props => (
    
    
    <div><br></br>
        <img style={imageStyle} alt='Loader icon' src={loaderSrc} />
    </div>
);

export default Loader;