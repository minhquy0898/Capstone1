import React from 'react'
import './SignInPage.css'
// import logo from '../../assets/img/backround_signInUp.jpg'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
const SignInPage = () => {
    return (
        <div className='container_login'>
            <div className='login_page' >
                <div className='login_left'>
                    <h1>Xin chào</h1>
                    <p>Đăng nhập hoặc tạo tài khoản</p>
                    <InputFormComponent className='mg-b-20 h-40 ' placeholder="Enter your email" />
                    <InputFormComponent className='h-40 ' placeholder="Enter your password" />
                    <button className='btn_login'>Đăng nhập</button>
                    <p className='foget_password'>Quên mật khẩu ?</p>
                    <p className='create_account'>Chưa có tài khoản ? <span>Tạo tài khoản</span></p>
                </div>
            </div>
        </div>
    )
}

export default SignInPage
