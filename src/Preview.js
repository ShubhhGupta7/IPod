import React from 'react';

const Preview = (props) => {
    const {title, image} = props.data;
    return (
        <div className = "preview"> 
            <img 
                 src = {image}
                 alt = 'prev-img'
                 style = {{height: 100, width: 100}}
            />
            <h1>{title}</h1>
        </div>
    );
}

export default Preview;