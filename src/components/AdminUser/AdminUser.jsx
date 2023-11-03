import React from 'react'
import './AdminUser.css'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import TableComponent from '../TableComponent/TableComponent'
const AdminUser = () => {
    return (
        <div>
            <div className='wrapper_header'>
                Quản lý người dùng
            </div>
            <div className='wrapper_button'>
                <Button className='btn_button'><PlusOutlined style={{ fontSize: '40px' }} /></Button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <TableComponent props={{ selectionType: 'checkbox' }} />
            </div>
        </div>
    )
}

export default AdminUser
