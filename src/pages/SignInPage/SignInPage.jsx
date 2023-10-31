import React, { useEffect, useState } from 'react'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import './SignInPage.css'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import { useNavigate } from 'react-router-dom'
import * as UserService from '../../services/UserService'
import { useMutationHook } from '../../hooks/useMutationHook';
import Loading from '../../components/LoadingComponent/Loading';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux'
import { updateUser } from '../../redux/slides/userSlide';

const SignInPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const mutation = useMutationHook(
        data => UserService.loginUser(data)
    )
    const { data, isLoading, isSuccess } = mutation

    useEffect(() => {
        if (isSuccess) {
            navigate('/')
            localStorage.setItem('access_token', JSON.stringify(data?.access_token))
            if (data?.access_token) {
                const decoded = jwtDecode(data?.access_token)
                console.log('decoded', decoded)
                if (decoded?.id) {
                    handleGetDetailUser(decoded?.id, data?.access_token)
                }

            }
        }
    }, [isSuccess])

    const handleGetDetailUser = async (id, token) => {
        const res = await UserService.getDetailUser(id, token)
        dispatch(updateUser({ ...res?.data, access_token: token }))
    }

    console.log("mutation", mutation)

    const handleNavigateSignUp = () => {
        navigate('/sign-up')
    }

    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }

    const handleOnchangePassword = (value) => {
        setPassword(value)
    }

    const handleSignIn = () => {
        mutation.mutate({
            email,
            password
        })
        // console.log('sign in', email, password)
    }

    return (
        <div className='container_login'>
            <div className='login_page' >
                <div className='login_left'>
                    <h1>Xin chào</h1>
                    <p>Đăng nhập hoặc tạo tài khoản</p>
                    <InputFormComponent className='mg-b-20 h-40 '
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleOnchangeEmail}
                    />
                    <div style={{ position: 'relative' }}>
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
                    {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
                    {/* <Loading isLoading={isLoading}> */}
                    <button
                        disabled={!email.length || !password.length}
                        onClick={handleSignIn}
                        className='btn_login'>Đăng nhập
                    </button>
                    {/* </Loading> */}
                    <p className='foget_password'>Quên mật khẩu ?</p>
                    <p className='create_account'>Chưa có tài khoản ? <span onClick={handleNavigateSignUp} style={{ cursor: 'pointer' }}>Tạo tài khoản</span></p>
                </div>
            </div>
        </div>
    )
}

export default SignInPage
