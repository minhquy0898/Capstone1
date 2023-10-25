import React from 'react'
import './ServiceComponent.css'

const ServiceComponent = ({ data }) => {
    const { name, image } = data
    return (
        <div className='service_main'>
            <div className='service_info'>
                <div className='service_info_name'>{name}</div>
                <img className='service_info_img' src={image} alt="" />
            </div>
        </div>
    )
}

export default ServiceComponent
