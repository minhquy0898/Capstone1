import React from 'react'
import './DeviceComponent.css'
import device1 from '../../assets/img/device-1.png'
import device2 from '../../assets/img/device-2.png'
import device3 from '../../assets/img/device-3.png'
const DeviceComponent = () => {
    return (
        <div className='device_product'>
            <div className='device_main'>
                <div className='device_main_name'>Cho thuê thiết bị ánh sáng</div>
                <img className='device_main_img' src={device1} alt="" />
            </div>
            <div className='device_main'>
                <div className='device_main_name'>Cho thuê thiết bị âm thanh</div>
                <img className='device_main_img' src={device2} alt="" />
            </div>
            <div className='device_main'>
                <div className='device_main_name'>Cho thuê màn hình LED</div>
                <img className='device_main_img' src={device3} alt="" />
            </div>
        </div>
    )
}

export default DeviceComponent
