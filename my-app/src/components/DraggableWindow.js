import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import "../css/DraggableWindow.css";

const DraggableWindow = ({ name, defaultPosition, children, userId }) => {
  const [position, setPosition] = useState(() => {
    const storedPosition = localStorage.getItem(`${userId}-${name}`);
    return storedPosition ? JSON.parse(storedPosition) : defaultPosition;
  });

  const handleStop = (e, data) => {
    const newPosition = { x: data.x, y: data.y };
    setPosition(newPosition);
    localStorage.setItem(`${userId}-${name}`, JSON.stringify(newPosition));
  };

  useEffect(() => {
    const storedPosition = localStorage.getItem(`${userId}-${name}`);
    if (storedPosition) {
      setPosition(JSON.parse(storedPosition));
    }
  }, [userId, name]);

  return (
    <Draggable handle=".handle" position={position} onStop={handleStop}>
      <div className="draggable-window">
        <div className="draggable-window-title handle">{name}</div>
        <div className="draggable-window-content">{children}</div>
      </div>
    </Draggable>
  );
};

export default DraggableWindow;
