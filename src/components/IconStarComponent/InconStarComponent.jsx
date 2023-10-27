import React from 'react'
import { FaStar } from 'react-icons/fa';
import './IconStarComponent.css'

const IconStarComponent = ({ active, onClick, onHover, onLeave }) => {
    const handleMouseEnter = () => {
        if (onHover) {
            onHover();
        }
    };
    const handleMouseLeave = () => {
        if (onLeave) {
            onLeave();
        }
    };
    return (
        <div
            className={`star-icon ${active ? 'yellow' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            <FaStar />
        </div>
    )
}

export default IconStarComponent
