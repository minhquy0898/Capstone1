import React from 'react'
import './ContentComponent.css'
const ContentComponent = () => {
    return (
        <>
            <div className='content_product'>
                <div className='content_left'>
                    <h2 className='content_title'>
                        GIÁ TRỊ CỦA DANANG'S EVENT
                    </h2>
                    <p className='content_desc'>
                        Da Nang's Event tổ chức sự kiện giúp cho doanh nghiệp có thể tiếp cận khách hàng tốt hơn,
                        đồng thời tăng thêm độ nhận diện cho thương hiệu.
                    </p>
                    <p className='content_desc'>
                        Dù là bất kỳ sự kiện nào, Da Nang's Event cũng luôn hướng đến các giá trị như:
                    </p>
                </div>
                <div className='content_right'>
                    <ul className='content_list'>
                        <li className='content_item'>
                            Đúng quy trình , đúng thủ tục
                            <div className='sub_content'>
                                <p>
                                    Mọi sự kiện được tổ chức đều đảm bảo đúng thủ tục, từ việc đăng ký giấy phép tổ chức,
                                    cho đến các công đoạn chính trong chương trình sự kiện lẫn các giai đoạn sau sự kiện.
                                </p>
                            </div>
                        </li>
                        <li className='content_item'>
                            Tối ưu hóa chi phí và thời gian
                            <div className='sub_content'>
                                <p>
                                    Mong muốn mang lại cho quý khách sự kiện với chi phí được tối ưu,
                                    đồng thời đảm bảo công tác tổ chức diễn ra nhanh chóng, tiết kiệm thời gian.
                                </p>
                            </div>
                        </li>
                        <li className='content_item'>
                            Mới lạ và sáng tạo
                            <div className='sub_content'>
                                <div className='sub_content'>
                                    <p>
                                        Với mỗi sự kiện khác nhau, chúng tôi luôn tạo ra cho quý khách từng kịch bản ấn tượng,
                                        mới lạ, giúp truyền tải thông điệp đến khách hàng trong quá trình tổ chức sự kiện.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='sub_content_product'>
                <h2 className='product_name'>Lý do bạn nên chọn Đà Nẵng Event</h2>
                <div className='content_product'>
                    <div className='content_info'>
                        <div className='content_procedure'>
                            <h3 className='title'>
                                QUY TRÌNH TỔ CHỨC SỰ KIỆN CHUYÊN NGHIỆP
                            </h3>
                            <p className='desc'>
                                Không chỉ là những màn trình diễn đặc sắc,
                                các tiết mục của chúng tôi liên tục đổi mới để đem đến cho khách hàng trải nghiệm độc đáo,
                                mới mẻ và vô cùng hấp dẫn.
                            </p>
                        </div>
                    </div>
                    <div className='content_info'>
                        <div className='content_procedure'>
                            <h3 className='title '>
                                CHƯƠNG TRÌNH SÁNG TẠO
                            </h3>
                            <p className='desc pd-0-74'>
                                Chúng tôi liên tục brainstorming để đưa ra những concept, ý tưởng sáng tạo nhất cho chương trình.
                            </p>
                        </div>
                    </div>
                    <div className='content_info'>
                        <div className='content_procedure'>
                            <h3 className='title'>
                                CAM KẾT VỀ CHẤT LƯỢNG
                            </h3>
                            <p className='desc'>
                                Chúng tôi là đơn vị duy nhất tại Hà Nội cam kết về chất lượng chương trình.
                                Nếu có bất kỳ điều gì khiến quý khách không hài lòng,
                                chúng tôi cam kết hoàn tiền từ 50-100% mà không hỏi thêm bất kỳ điều gì.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContentComponent
