import React from 'react'
import './NewProductComponent.css'
import { BsStars } from 'react-icons/bs'
import imgNew1 from '../../assets/img/MN-1.jpg'
import imgNew2 from '../../assets/img/MN-2.jpg'
import imgNew3 from '../../assets/img/MN-3.jpg'
import imgNew4 from '../../assets/img/MN-4.jpg'
import imgNew5 from '../../assets/img/MN-5.jpg'
import imgNew6 from '../../assets/img/MN-6.jpg'
// import logo1 from '../../assets/img/LG-1.png'
// import logo2 from '../../assets/img/LG-2.jpeg'
// import logo3 from '../../assets/img/LG-3.jpeg'
// import logo4 from '../../assets/img/LG-4.jpeg'
// import logo5 from '../../assets/img/LG-5.png'
// import logo6 from '../../assets/img/LG-6.jpeg'
const NewProductComponent = () => {

    return (
        <>
            <div className='head_new_product'>
                <div className='product_icon'>
                    <BsStars style={{ position: 'absolute', top: '6px', left: '8px', fontSize: '20px' }} />
                </div>
                <div className='product_icon_name'>
                    <p className='name'>Mới nhất</p>
                </div>
            </div>
            <div className='new_product'>
                <div className='product_new_content'>
                    <div className='product_img'>
                        <img src={imgNew1} alt="" />
                    </div>
                    <div className='product_title'>
                        <p>Lễ khai khách sạn biển bắc</p>
                    </div>
                </div>
                <div className='product_new_content'>
                    <div className='product_img'>
                        <img src={imgNew2} alt="" />
                    </div>
                    <div className='product_title'>
                        <p>Vịnh xuân đón trăng</p>
                    </div>
                </div>
                <div className='product_new_content'>
                    <div className='product_img'>
                        <img src={imgNew3} alt="" />
                    </div>
                    <div className='product_title'>
                        <p>Thuê múa lân sư rồng</p>
                    </div>
                </div>
                <div className='product_new_content'>
                    <div className='product_img'>
                        <img src={imgNew4} alt="" />
                    </div>
                    <div className='product_title'>
                        <p>Tổ chức sự kiện tại khách sạn 5 sao</p>
                    </div>
                </div>
                <div className='product_new_content'>
                    <div className='product_img'>
                        <img src={imgNew5} alt="" />
                    </div>
                    <div className='product_title'>
                        <p>Triển lãm quốc tế ios week</p>
                    </div>
                </div>
                <div className='product_new_content'>
                    <div className='product_img'>
                        <img src={imgNew6} alt="" />
                    </div>
                    <div className='product_title'>
                        <p>Tổ chức lễ khánh thành</p>
                    </div>
                </div>
            </div>
            {/* <h3>Khách hàng của Đà Nẵng Event</h3>
            <p>Các thương hiêu khách hàng tin tưởng sử dụng dịch vụ tổ chức sự kiện của DANANG'S EVENT</p> */}
            {/* <div className='logo_product'>
                <div className='logo'>
                    <div className='logo_img'>
                        <img src={logo1} alt="" />
                    </div>
                    <div className='logo_img'>
                        <img style={{ width: '300px', height: '150px' }} src={logo2} alt="" />
                    </div>
                    <div className='logo_img'>
                        <img src={logo3} alt="" />
                    </div>
                    <div className='logo_img'>
                        <img src={logo4} alt="" />
                    </div>
                    <div className='logo_img'>
                        <img src={logo5} alt="" />
                    </div>
                    <div className='logo_img'>
                        <img src={logo6} alt="" />
                    </div>
                </div>
            </div> */}
            <div className='about'>
                <div className='about_cotent'>
                    <p className='about_title'>Tôi không thể nào quên được đêm trình diễn vô cùng sôi động của các bạn ấy.
                        Quả là 1 kỷ niệm tuyệt vời đối với tôi và gia đình.
                    </p>
                    <p className='about_signature text-center '>
                        Nguyễn Minh Anh
                    </p>
                    <p className='about_position text-center '>
                        Quản lý - Win Poker
                    </p>
                </div>
                <div className='about_cotent'>
                    <p className='about_title'>Tôi không thể nào quên được đêm trình diễn vô cùng sôi động của các bạn ấy.
                        Quả là 1 kỷ niệm tuyệt vời đối với tôi và gia đình.
                    </p>
                    <p className='about_signature text-center '>
                        Nguyễn Minh Anh
                    </p>
                    <p className='about_position text-center '>
                        Quản lý - Win Poker
                    </p>
                </div>
                <div className='about_cotent'>
                    <p className='about_title'>Tôi không thể nào quên được đêm trình diễn vô cùng sôi động của các bạn ấy.
                        Quả là 1 kỷ niệm tuyệt vời đối với tôi và gia đình.
                    </p>
                    <p className='about_signature text-center '>
                        Nguyễn Minh Anh
                    </p>
                    <p className='about_position text-center '>
                        Quản lý - Win Poker
                    </p>
                </div>
            </div>
        </>

    )
}

export default NewProductComponent
