import React, { useEffect, useState } from 'react'
import './AdminProduct.css'
import { Button, Form, Modal, Input } from 'antd'
import { PlusOutlined, UploadOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import TableComponent from '../TableComponent/TableComponent'
import InputFormComponent from '../InputFormComponent/InputFormComponent'
import { WrapperUploadFile } from '../../pages/Profile/style'
import { getBase64 } from '../../utils'
import { WrapperUploadFileAdmin } from './style'
import * as ProductService from '../../services/ProductService'
import { useMutationHook } from '../../hooks/useMutationHook'
import Loading from '../LoadingComponent/Loading'
import * as message from '../../components/Message/Message'
import { useQuery } from '@tanstack/react-query'


const AdminProduct = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [stateProduct, setStateProduct] = useState({
        name: '',
        type: '',
        quantity: '',
        price: '',
        description: '',
        rating: '',
        image: ''
    })
    const [form] = Form.useForm();

    const mutation = useMutationHook(
        (data) => {
            const { name, type, quantity, price, description, rating, image } = data
            const res = ProductService.createProduct({ name, type, quantity, price, description, rating, image })
            return res
        }
    )

    const getAllProducts = async () => {
        const res = await ProductService.getAllProduct()
        return res
    }

    const { data, isLoading, isSuccess, isError } = mutation

    const { isLoading: isLoadingProducts, data: products } = useQuery({ queryKey: ['products'], queryFn: getAllProducts })
    const renderAction = () => {
        return (
            <div>
                <DeleteOutlined style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} />
                <EditOutlined style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} />
            </div>
        )
    }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
        },
        {
            title: 'Type',
            dataIndex: 'type',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: renderAction

        },
    ];
    const dataTable = products?.data.length && products?.data.map((product) => {
        return { ...product, key: product._id }
    })

    useEffect(() => {
        if (isSuccess && data?.status === "OK") {
            message.success()
            handleCancel()
        } else if (isError) {
            message.error()
        }
    }, [isSuccess])

    const handleCancel = () => {
        setIsModalOpen(false);
        setStateProduct({
            name: '',
            type: '',
            quantity: '',
            price: '',
            description: '',
            rating: '',
            image: ''
        })
        form.resetFields()
    };

    const onFinish = (value) => {
        mutation.mutate(stateProduct)
        console.log('value', value)
        console.log('state', stateProduct)
    }
    const handleOnChange = (e) => {
        if (e.target && e.target.name) {
            const { name, value } = e.target;
            setStateProduct({
                ...stateProduct,
                [name]: value,
            });
        }
    };
    const handleOnchangeAvatar = async ({ fileList }) => {
        const file = fileList[0];
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setStateProduct({
            ...stateProduct,
            image: file.preview
        });
    }


    // const handleOnChange = (e) => {
    //     setStateProduct({
    //         ...setStateProduct,
    //         [e.target.name]: e.target.vale
    //     })
    // }
    return (
        <div>
            <div className='wrapper_header'>
                Quản lý sản phẩm
            </div>
            <div className='wrapper_button'>
                <Button onClick={() => setIsModalOpen(true)} className='btn_button'><PlusOutlined style={{ fontSize: '40px' }} /></Button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <TableComponent columns={columns} isLoading={isLoadingProducts} props={{ selectionType: 'checkbox' }} data={dataTable} />
            </div>
            <Modal title="Tạo sản phẩm" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    autoComplete="on"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <InputFormComponent value={stateProduct.name} onChange={(value) => {
                            setStateProduct({
                                ...stateProduct,
                                "name": value,
                            });
                        }} name="name" />
                    </Form.Item>


                    <Form.Item
                        label="Type"
                        name="Type"
                        rules={[{ required: true, message: 'Please input your type!' }]}
                    >
                        <InputFormComponent value={stateProduct.type} onChange={(value) => {
                            setStateProduct({
                                ...stateProduct,
                                "type": value,
                            });
                        }} name="type" />

                    </Form.Item>

                    <Form.Item
                        label="Quantity"
                        name="quantity"
                        rules={[{ required: true, message: 'Please input your Quantity!' }]}
                    >
                        <InputFormComponent value={stateProduct.quantity} onChange={(value) => {
                            setStateProduct({
                                ...stateProduct,
                                "quantity": value,
                            });
                        }} name="quantity" />

                    </Form.Item>

                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: 'Please input your Price!' }]}
                    >
                        <InputFormComponent value={stateProduct.price} onChange={(value) => {
                            setStateProduct({
                                ...stateProduct,
                                "price": value,
                            });
                        }} name="price" />

                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please input your Description!' }]}
                    >
                        <InputFormComponent value={stateProduct.description} onChange={(value) => {
                            setStateProduct({
                                ...stateProduct,
                                "description": value,
                            });
                        }} name="description" />

                    </Form.Item>

                    <Form.Item
                        label="Rating"
                        name="rating"
                        rules={[{ required: true, message: 'Please input your Rating!' }]}
                    >
                        <InputFormComponent value={stateProduct.rating} onChange={(value) => {
                            setStateProduct({
                                ...stateProduct,
                                "rating": value,
                            });
                        }} name="rating" />

                    </Form.Item>

                    <Form.Item
                        label="Image"
                        name="image"
                        rules={[{ required: true, message: 'Please input your Image!' }]}
                    >
                        <WrapperUploadFileAdmin onChange={handleOnchangeAvatar} maxCount={1}>
                            <Button>Select File</Button>
                            {stateProduct?.image && (
                                <img src={stateProduct?.image} style={{
                                    height: '60px',
                                    width: '60px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    marginLeft: '10px'
                                }} alt='avatar' />
                            )}
                        </WrapperUploadFileAdmin>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: 20, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default AdminProduct
