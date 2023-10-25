import React from 'react'
import './IntroduceComponent.css'
import imgHeader from '../../assets/img/header.png'
const IntroduceComponent = () => {
    return (
        <div className='introduce'>
            <div className='introduce_img'>
                <img src={imgHeader} alt="" />
            </div>
            <div className='introduce_title'>
                <h2>CÔNG TY TỔ CHỨC SỰ KIỆN</h2>
                <p>DANANG'S EVENT</p>
                <div className='introduce_info'>
                    <div className='btn_1'>0898240032</div>
                    <div className='btn_2'>Báo giá nhanh</div>
                </div>
            </div>
        </div>
    )
}

export default IntroduceComponent
