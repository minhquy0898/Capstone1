import React, { useState } from 'react'
import YouTube from 'react-youtube';
// import { BiRadioCircleMarked } from 'react-icons/bi'
import './ProductDetailComponent.css'
import IconStarComponent from '../IconStarComponent/InconStarComponent'
import InfoComponent from '../../components/InfoComponent/InfoComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'
import ContactComponent from '../ContactComponent/ContactComponent'
import productDetail1 from '../../assets/img/product-detail-2.png'
import productDetail2 from '../../assets/img/product-detail-3.png'
import productDetail3 from '../../assets/img/product-detail-4.png'
import productDetail4 from '../../assets/img/product-detail-5.png'
import productDetail5 from '../../assets/img/product-detail-6.png'
import productDetail6 from '../../assets/img/product-detail-7.png'
import productDetail7 from '../../assets/img/product-detail-8.png'
import productDetail8 from '../../assets/img/product-detail-9.png'
import IntroduceComponent from '../IntroduceComponent/IntroduceComponent';
const ProductDetailComponent = () => {
    const [stars, setStars] = useState([false, false, false, false, false]);

    const handleStarHover = (index) => {
        const newStars = [...stars];
        for (let i = 0; i <= index; i++) {
            newStars[i] = true;
        }
        setStars(newStars);
    };

    const handleStarLeave = (index) => {
        const newStars = stars.map((_, i) => i <= index);
        setStars(newStars);
    };

    const handleStarClick = (index) => {
        const newStars = stars.map((_, i) => i <= index);
        setStars(newStars);
    };
    const videoId = 'https://youtu.be/u0zaLS07zO4';
    const opts = {
        height: '360',
        width: '100%',
    };
    return (
        <>
            <div className='product_detail'>
                <div className='top_product_detail'>
                    <div className='product_detail_name'>Lễ kỷ niệm thành lập công ty 8 năm viettel cyber security</div>
                    <div className='product_detail_main'>
                        <ul className='detail_list'>
                            <li className='detail_item'> Địa điểm : 254 Nguyễn Văn Linh , Đà Nẵng</li>
                            <li className='detail_item'>Quy mô : 500 người </li>
                            <li className='detail_item'>Lượt xem : 81</li>
                        </ul>
                    </div>
                </div>
                <div className='wrapper_product_detail'>
                    <div className='product_detail_left'>
                        <div className="star-container">
                            {stars.map((active, index) => (
                                <IconStarComponent
                                    key={index}
                                    active={active}
                                    onHover={() => handleStarHover(index)}
                                    onLeave={() => handleStarLeave(index)}
                                    onClick={() => handleStarClick(index)}
                                />
                            ))}
                        </div>
                        <div className='left_product_info'>
                            <p className='product_detail_desc'>
                                Lễ kỷ niệm thành lập công ty là ngày trọng đại, đánh dấu hành trình cột mốc công ty phát triển và đạt được những thành tựu.
                                Đây chính là dịp để tri ân và đánh giá những kết quả đạt được của công ty trong suốt quá trình hình thành và phát triển.
                                Ngoài ra, cũng là dịp để mọi người cùng nhau nâng ly chúc mừng sinh nhật công ty, cùng nhau giao lưu,
                                chia sẻ những kỉ niệm trong thời gian gắn bó.
                            </p>
                            <div className='video'>
                                <YouTube videoId={videoId} opts={opts} />
                            </div>
                            <div>
                                <h3>1. Lịch sử hình thành & phát triển của VCS</h3>
                                <p className='product_detail_desc'>
                                    Từ những ngày đầu, với quân số chỉ gồm 6 người được “chắt lọc” từ những nhân sự bảo mật xuất sắc tại đơn vị trong Tập đoàn,
                                    tiền thân của Công ty An ninh mạng Viettel - Ban ATTT của Tập đoàn Công nghiệp – Viễn thông Quân đội Viettel được thành lập.

                                    6 con người với sự nỗ lực và khát khao đã từng bước từng bước hoàn thành xuất sắc nhiệm vụ, mở rộng quy mô của Ban ATTT lên tới 35 người và trở thành Trung tâm An ninh mạng Viettel vào ngày 14/8/201. Từ đó ngày 14/8 được đánh dấu là Ngày truyền thống của VCS.
                                </p>
                            </div>
                            <div>
                                <h5 className='product_detail_desc'>
                                    Dưới đây là một số hình ảnh khi chúng tôi set-up và khi chương trình diễn ra:
                                </h5>
                                <img className='product_detail_img' src={productDetail1} alt="" />
                                <img className='product_detail_img' src={productDetail2} alt="" />
                                <p className='product_detail_sub'>Bản vẽ 3D sân khấu và cổng chào</p>
                                <img className='product_detail_img' src={productDetail3} alt="" />
                                <p className='product_detail_desc'>
                                    Dự lễ kỷ niệm có các đồng chí Phạm Gia Túc, UVBCHTW Đảng, Bí thư Tỉnh uỷ; đồng chí Cao Đức Phát, nguyên UVBCHTW Đảng,
                                    nguyên Phó Trưởng Ban Thường trực Ban Kinh tế TW; đồng chí Nguyễn Khắc Hưng, Nguyên Bí thư Tỉnh ủy; đồng chí Nguyễn Phùng Hoan,
                                    UVBTVTU, Phó Chủ tịch Thường trực HĐND tỉnh; đồng chí Mai Thanh Long, TUV, Phó Chủ tịch HĐND tỉnh
                                </p>
                                <img className='product_detail_img' src={productDetail4} alt="" />
                                <img className='product_detail_img' src={productDetail5} alt="" />
                                <p className='product_detail_sub'> Hình ảnh các lãnh đạo cấp cao đang tiến vào sự kiện</p>
                                <img className='product_detail_img' src={productDetail6} alt="" />
                                <img className='product_detail_img' src={productDetail7} alt="" />
                                <img className='product_detail_img' src={productDetail8} alt="" />
                            </div>
                            <div className='product_detail_contact'>
                                <h3>Liên hệ DaNang Event</h3>
                                <p>Công ty TNHH tổ chức sự kiện - DaNang Event</p>
                                <ul className='contact_list'>
                                    <li className='contact_item'>
                                        SĐT : 0898240032
                                    </li>
                                    <li className='contact_item'>
                                        Email : DaNangEvent@gmail.com
                                    </li>
                                    <li className='contact_item'>
                                        Địa chỉ : Số 123 Nguyễn Văn Linh, quận Thanh Khê , Đà Nẵng
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='product_detail_right'>
                        <div className='detail_right_contact'>
                            <ContactComponent />
                        </div>
                    </div>
                </div>
            </div>
            <InfoComponent />
            <FooterComponent />
        </>
    )
}

export default ProductDetailComponent
