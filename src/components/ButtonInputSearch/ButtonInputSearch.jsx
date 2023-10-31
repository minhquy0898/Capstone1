import { Button, Input } from 'antd'
import './ButtonInputSearch.css'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons'

const ButtonInputSearch = (props) => {
    const { size, placeholder, textBtn } = props
    return (
        <div className='header_search'>
            <Input size={size} placeholder={placeholder} />
            <Button size={size} icon={<SearchOutlined />} style={{ borderRadius: '0px', height: '39px' }}>{textBtn}</Button>
        </div>
    )
}

export default ButtonInputSearch
