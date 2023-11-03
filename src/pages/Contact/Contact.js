import React from 'react'
import './Contact.css'
import InfoComponent from '../../components/InfoComponent/InfoComponent'
import IntroduceComponent from '../../components/IntroduceComponent/IntroduceComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'


const Contact = () => {
    return (
        <div className='backgroub_contact'>
            <IntroduceComponent />
            <div className='contact'>
                <div className='contact_top'>
                    <h2 className='contact_tile'>
                        Liên hệ
                    </h2>
                    <p className='contact_desc'>
                        Quý khách hàng có Yêu cầu gửi Báo giá hoặc cần hỗ trợ tư vấn dịch vụ Tổ chức Sự Kiện xin vui lòng liên hệ với DaNang Event qua những kênh liên lạc dưới đây hoặc gọi trực tiếp vào Hotline, chúng tôi luôn sẵn sàng trực tiếp hỗ trợ quý khách 24/7.DaNang Event hân hạnh được phục vụ quý khách!
                    </p>
                </div>
                <div className='contact_bottom'>
                    <p className='content-desc'>Liên hệ tổ chức sự kiện: 0974072720</p>
                    <p className='content-desc'>Website: https://Danangevent.com/</p>
                    <p className='content-desc'>Fanpage: DaNang  Event</p>
                    <p className='content-desc'>Email: danangevent@gmail.com</p>
                </div>

                <div className="col-12 form-group">
                    <label className='form_label'>HỌ và Tên </label>
                    <input
                        type="text"
                        className="form-control login-input"
                    // placeholder="Enter your user name"
                    // value={this.state.username}
                    // onChange={(e) => this.handleOnChangeUserName(e)}
                    />

                    <label className='form_label'>Email </label>
                    <input
                        type="text"
                        className="form-control login-input"
                    // placeholder="Enter your user name"
                    // value={this.state.username}
                    // onChange={(e) => this.handleOnChangeUserName(e)}
                    />
                    <label className='form_label'>Số Điện Thoại </label>
                    <input
                        type="text"
                        className="form-control login-input"
                    // placeholder="Enter your user name"
                    // value={this.state.username}
                    // onChange={(e) => this.handleOnChangeUserName(e)}
                    />
                    <label className='form_label'>Địa Chỉ</label>
                    <input
                        type="text"
                        className="form-control login-input"
                    // placeholder="Enter your user name"
                    // value={this.state.username}
                    // onChange={(e) => this.handleOnChangeUserName(e)}
                    />
                    <label className='form_label'>Góp Ý</label>
                    <input
                        type="text_feedback "
                        className="form-control login-input"
                    // placeholder="Enter your user name"
                    // value={this.state.username}
                    // onChange={(e) => this.handleOnChangeUserName(e)}
                    />
                    <button
                        className="btn-Submit"
                    // onClick={() => this.handleLogin()}
                    >Gữi Thông Tin</button>
                </div>


            </div>

            <InfoComponent />
            <FooterComponent />

        </div>
    )
}

export default Contact