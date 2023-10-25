import React from 'react'
import './ProvideComponent.css'
import provide1 from '../../assets/img/provide-1.png'
import provide2 from '../../assets/img/provide-2.png'
import provide3 from '../../assets/img/provide-3.png'
import provide4 from '../../assets/img/provide-4.png'
import provide5 from '../../assets/img/provide-5.png'
const ProvideComponent = () => {
    return (
        <div className='provide_info'>
            <div className='provide_main'>
                <div className='provide_main_name'>Dịch Vụ Cung Cấp MC</div>
                <img className='provide_main_img' src={provide1} alt="" />
            </div>
            <div className='provide_main'>
                <div className='provide_main_name'>Dịch Vụ Cung Cấp PG-PB</div>
                <img className='provide_main_img' src={provide2} alt="" />
            </div>
            <div className='provide_main'>
                <div className='provide_main_name'>Dịch Vụ Cung Cấp Lân Sư Rồng</div>
                <img className='provide_main_img' src={provide3} alt="" />
            </div>
            <div className='provide_main'>
                <div className='provide_main_name'>Dịch Vụ Cung Cấp Ca Sĩ</div>
                <img className='provide_main_img' src={provide4} alt="" />
            </div>
            <div className='provide_main'>
                <div className='provide_main_name'>Dịch Vụ Cung Cấp Nhóm Nhảy</div>
                <img className='provide_main_img' src={provide5} alt="" />
            </div>
        </div>
    )
}

export default ProvideComponent
