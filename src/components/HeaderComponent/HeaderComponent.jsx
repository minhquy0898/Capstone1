import React, { useEffect, useState } from 'react'
import './HeaderComponent.css'
import { Link } from 'react-router-dom';
import { Popover, Row } from 'antd'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService'
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'
import { resetUser } from '../../redux/slides/userSlide';

const HeaderComponent = () => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [loading, setLoading] = useState(false)
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }

    const handleLogout = async () => {
        setLoading(true)
        await UserService.logoutUser()
        dispatch(resetUser())
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        setUserName(user?.name)
        setUserAvatar(user?.avatar)
        setLoading(false)
    }, [user?.name, user?.avatar])
    const content = (
        <div className='content_popup'>
            <p className='popup' style={{ cursor: 'pointer' }} onClick={() => navigate('/profile-user')}>Thông tin cá nhân</p>
            {user?.isAdmin && (
                <p className='popup' style={{ cursor: 'pointer' }} onClick={() => navigate('/system/admin')}>Giám sát hệ thống</p>
            )}
            <p className='popup' style={{ cursor: 'pointer' }} onClick={handleLogout}>Đăng xuất</p>
        </div>
    )
    return (
        <div className='header_nav'>
            <ul className='header_list'>
                <Popover content={content} trigger="click">
                    <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', fontSize: '15px' }}>{userName?.length ? userName : user?.email}</div>
                </Popover>
                <div className='list_item_user'>
                    <AiOutlineUser onClick={handleNavigateLogin} style={{ color: '#fff' }} size={22} />
                </div>
                <li className='list_item'>
                    <Link className='item_link' to="">Trang chủ</Link>
                </li>
                <li className='list_item'>
                    <Link className='item_link' to="">Giới thiệu</Link>
                </li>
                <li className='list_item'>
                    <Link className='item_link' to="./products">Dịch vụ</Link>
                </li>
                <li className='list_item'>
                    <Link className='item_link' to="">Liên hệ</Link>
                </li>
                <li className='list_item'>
                    <AiOutlineSearch size={20} />
                </li>
            </ul>
        </div>
    )
}

export default HeaderComponent
