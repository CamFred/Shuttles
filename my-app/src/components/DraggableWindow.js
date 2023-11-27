import React from 'react';
import Draggable from 'react-draggable';

const DraggableWindow = ({ name, defaultPosition, children }) => {
    const backgroundColor = '#000';
    const textColor = '#00bfff';
    const borderColor = '#00bfff';
    const boxShadowColor = '#00bfff';    

    const windowStyle = {
        position: 'absolute',
        backgroundColor: backgroundColor,
        border: '1px solid #ccc',
        backgroundRepeat: 'repeat',
        color: textColor,
        width: '100%',
        maxWidth: '320px',
        margin: '0 auto',
        border: `3px solid ${borderColor}`,
        boxShadow: `0 0 15px ${boxShadowColor}`,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '0px',
        borderRadius: '0px',
        maxHeight: '500px', // Set a maximum height
        overflow: 'auto', // Add a scrollbar when the content exceeds the maximum height
    };

        const titleBarStyle = {
            cursor: 'move',

            width: '320px',
            height: '10px',
            backgroundColor: '#000',
            color: '#fff',
            padding: '5px',
            cursor: 'move',
            fontFamily: '"Press Start 2P", cursive',
            borderBottom: '1px solid #fff',
            fontSize: '0.6em',            
            borderRadius: '0px',
        };

        const contentStyle = {
            width: '320px',

            maxHeight: '200px', // Set a maximum height for the content
            overflow: 'auto', // Add a scrollbar when the content exceeds the maximum height
        };

    return (
        <Draggable handle=".handle" defaultPosition={defaultPosition}>
            <div style={windowStyle}>
                <div style={titleBarStyle} className="handle">{name}</div>
                <div style={contentStyle}>{children}</div> {/* Wrap the children with the contentStyle */}
            </div>
        </Draggable>
    );
};

export default DraggableWindow;