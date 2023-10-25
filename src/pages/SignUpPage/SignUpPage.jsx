import React from 'react'
import './SignUpPage.css'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'

const SignUpPage = () => {
    return (
        <div className='container_login'>
            <div className='login_page' >
                <div className='login_left'>
                    <h1>Xin chào</h1>
                    <p>Đăng nhập hoặc tạo tài khoản</p>
                    <InputFormComponent className='mg-b-20 h-40 ' placeholder="Enter your email" />
                    <InputFormComponent className='h-40 mg-b-20 ' placeholder="Enter your password" />
                    <InputFormComponent className='h-40' placeholder="Comfirm password" />
                    <button className='btn_login'>Đăng ký</button>
                    <p className='create_account'>Bạn đã có tài khoản ? <span>Đăng nhập</span></p>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage
