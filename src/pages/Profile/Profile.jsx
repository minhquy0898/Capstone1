import React, { useEffect, useState } from 'react'
import './Profile.css'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import { useDispatch, useSelector } from 'react-redux'
import * as UserService from '../../services/UserService'
import { useMutationHook } from '../../hooks/useMutationHook'
import * as message from '../../components/Message/Message'
import { updateUser } from '../../redux/slides/userSlide'


const Profile = () => {
    const user = useSelector((state) => state.user)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [avatar, setAvatar] = useState('')
    const mutation = useMutationHook(
        (data) => {
            const { id, access_token, ...rests } = data
            UserService.updateUser(id, rests, access_token)
        }
    )

    const dispatch = useDispatch()
    const { data, isLoading, isSuccess, isError } = mutation
    console.log('data', data)

    useEffect(() => {
        setEmail(user?.email)
        setName(user?.name)
        setPhone(user?.phone)
        setAddress(user?.address)
        setAvatar(user?.avatar)
    }, [user])

    useEffect(() => {
        if (isSuccess) {
            message.success()
            handleGetDetailUser(user?.id, user?.access_token)
        } else if (isError) {
            message.error()
        }
    }, [isSuccess, isError])

    const handleGetDetailUser = async (id, token) => {
        const res = await UserService.getDetailUser(id, token)
        dispatch(updateUser({ ...res?.data, access_token: token }))
    }

    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }
    const handleOnchangeName = (value) => {
        setName(value)

    }
    const handleOnchangePhone = (value) => {
        setPhone(value)

    }
    const handleOnchangeAddress = (value) => {
        setAddress(value)

    }
    const handleOnchangeAvatar = (value) => {
        setAvatar(value)

    }
    const handleUpdate = () => {
        mutation.mutate({ id: user?.id, email, name, phone, address, avatar, access_token: user?.access_token })

    }
    return (
        <div className='wrapper_profile'>
            <h1 className='profile_name'>Thông tin người dùng</h1>
            <div className='profile_content'>
                <div className='profile_input'>
                    <label htmlFor="name" className='profile_label'>Name</label>
                    <InputFormComponent className='w-300'
                        id="name"
                        value={name}
                        onChange={handleOnchangeName}
                    />
                    <button
                        onClick={handleUpdate}
                        className='btn_update'>Cập nhật
                    </button>
                </div>
                <div className='profile_input'>
                    <label htmlFor="email" className='profile_label'>Email</label>
                    <InputFormComponent className='w-300'
                        id="email"
                        value={email}
                        onChange={handleOnchangeEmail}
                    />
                    <button
                        onClick={handleUpdate}
                        className='btn_update'>Cập nhật
                    </button>
                </div>
                <div className='profile_input'>
                    <label htmlFor="phone" className='profile_label'>Phone</label>
                    <InputFormComponent className='w-300'
                        id="phone"
                        value={phone}
                        onChange={handleOnchangePhone}
                    />
                    <button
                        onClick={handleUpdate}
                        className='btn_update'>Cập nhật
                    </button>
                </div>
                <div className='profile_input'>
                    <label htmlFor="phone" className='profile_label'>Address</label>
                    <InputFormComponent className='w-300'
                        id="address"
                        value={address}
                        onChange={handleOnchangeAddress}
                    />
                    <button
                        onClick={handleUpdate}
                        className='btn_update'>Cập nhật
                    </button>
                </div>
                <div className='profile_input'>
                    <label htmlFor="avatar" className='profile_label'>Avatar</label>
                    <InputFormComponent className='w-300'
                        id="avatar"
                        value={avatar}
                        onChange={handleOnchangeAvatar}
                    />
                    <button
                        onClick={handleUpdate}
                        className='btn_update'>Cập nhật
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile
