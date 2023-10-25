import React from 'react'
import './HeaderComponent.css'
import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'
const HeaderComponent = () => {
    return (
        <div className='header_nav'>
            <ul className='header_list'>
                <div className='list_item_user'>
                    <Link to="./sign-in" style={{ color: '#fff' }}>
                        <AiOutlineUser size={22} />
                    </Link>
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
