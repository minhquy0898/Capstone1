import React from 'react'
import './InfoComponent.css'
const InfoComponent = () => {
    return (
        <div className='content_total'>
            <div className='content_info_product'>
                <div className='address w-33 mg-l-70'>
                    <h4 className='content_title'>Địa chỉ văn phòng</h4>
                    <p style={{ color: '3797585' }}>Số 123 Nguyễn Văn Linh, quận Thanh Khê , Đà Nẵng</p>
                </div>
                <div className='info w-33 mg-l-70'>
                    <h4 className='content_title'>Thông tin liên hệ</h4>
                    <p className='email'>Email : <span style={{ color: '#5a8ef7' }}>danangevet@gmail.com</span> </p>
                    <p className='hotline'>Hot line <span style={{ color: '#5a8ef7' }}>0974.072.270</span> </p>
                    <p>Mr. Hùng Trần <span style={{ color: '#5a8ef7' }}> 012341234</span></p>
                </div>
                <div className='account w-33'>
                    <h4 className='content_title'>Tài khoản ngân hàng</h4>
                    <p className='by_at'>Người Nhận: DANANG'S EVENT</p>
                    <p className='STK'>Số tài khoản:0123456789</p>
                    <p className='bank'>Ngân Hàng:Vietinbank</p>
                </div>
            </div>
        </div>
    )
}

export default InfoComponent
