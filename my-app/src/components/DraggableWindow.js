import React from 'react';
import Draggable from 'react-draggable';

const DraggableWindow = ({ name, defaultPosition, children }) => {
    const backgroundColor = '#000';
    const textColor = '#00bfff';
    const borderColor = '#00bfff';
    const boxShadowColor = '#00bfff';    

    const windowStyle = {
        backgroundColor: backgroundColor,
        backgroundRepeat: 'repeat',
        color: textColor,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        border: `3px solid ${borderColor}`,
        boxShadow: `0 0 15px ${boxShadowColor}`,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '0px',
        borderRadius: '0px',
        };

        const titleBarStyle = {
            width: '100%',
            height: '10px',
            backgroundColor: '#000', // dark background
            color: '#fff', // light color font
            padding: '5px',
            cursor: 'move',
            borderRadius: '0px',
            fontFamily: '"Press Start 2P", cursive', // pixel art style font
            borderBottom: '1px solid #fff', // thin line at the bottom
            fontSize: '0.6em', // much smaller font size
        };

    return (
        <Draggable handle=".handle" defaultPosition={defaultPosition}>
            <div style={windowStyle}>
                <div style={titleBarStyle} className="handle">{name}</div>
                {children} {/* Render the children here */}
            </div>
        </Draggable>
    );
};

export default DraggableWindow;