import React from 'react'
import './EventProductComponent.css'
const EventProductComponent = ({ data }) => {
    const { name, image } = data
    return (
        <div className='product_event'>
            <div className='event_main'>
                <div className='event_main_name'>{name}</div>
                <img className='event_main_img' src={image} alt="" />
            </div>
        </div>
    )
}

export default EventProductComponent

