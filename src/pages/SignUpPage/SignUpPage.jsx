import React, { useEffect, useState } from 'react'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import './SignUpPage.css'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import { useNavigate } from 'react-router-dom'
import * as UserService from '../../services/UserService'
import { useMutationHook } from '../../hooks/useMutationHook';
import Loading from '../../components/LoadingComponent/Loading';
import * as message from '../../components/Message/Message'


const SignUpPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }

    const mutation = useMutationHook(
        data => UserService.signupUser(data)
    )

    const { data, isLoading, isSuccess, isError } = mutation

    useEffect(() => {
        if (isSuccess) {
            message.success()
            handleNavigateSignIn()
        } else if (isError) {
            message.error()
        }
    }, [isSuccess, isError])

    const handleOnchangePassword = (value) => {
        setPassword(value)
    }

    const handleOnchangeConfirmPassword = (value) => {
        setConfirmPassword(value)
    }

    const navigate = useNavigate()
    const handleNavigateSignIn = () => {
        navigate('/sign-in')
    }

    const handleSignUp = () => {
        mutation.mutate({ email, password, confirmPassword })
        // console.log('sign up', email, password, confirmPassword)
    }

    return (
        <div className='container_login'>
            <div className='login_page' >
                <div className='login_left'>
                    <h1>Xin chào</h1>
                    <p>Đăng nhập hoặc tạo tài khoản</p>
                    <InputFormComponent
                        className='mg-b-20 h-40 '
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleOnchangeEmail} />
                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                        <span
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '12px',
                                right: '16px'
                            }}
                        >{
                                isShowPassword ? (
                                    <EyeOutlined />
                                ) : (
                                    <EyeInvisibleOutlined />
                                )
                            }
                        </span>
                        <InputFormComponent className='h-40 '
                            placeholder="Enter your password"
                            type={isShowPassword ? "text" : "password"}
                            value={password}
                            onChange={handleOnchangePassword}
                        />
                    </div>
                    <div style={{ position: 'relative' }}>
                        <span
                            onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '12px',
                                right: '16px'
                            }}
                        >{
                                isShowConfirmPassword ? (
                                    <EyeOutlined />
                                ) : (
                                    <EyeInvisibleOutlined />
                                )
                            }
                        </span>
                        <InputFormComponent className='h-40'
                            placeholder="Comfirm password"
                            type={isShowConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={handleOnchangeConfirmPassword}
                        />
                    </div>
                    {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
                    {/* <Loading isLoading={isLoading}> */}
                    <button
                        onClick={handleSignUp}
                        className='btn_login'>Đăng ký
                    </button>
                    {/* </Loading> */}
                    <p className='create_account'>Bạn đã có tài khoản ? <span onClick={handleNavigateSignIn} style={{ cursor: 'pointer' }}>Đăng nhập</span></p>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage
