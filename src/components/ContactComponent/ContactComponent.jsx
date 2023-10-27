import React, { useState } from 'react'
import './ContactComponent.css'
const ContactComponent = () => {
    const [showContact, setShowContact] = useState(false);
    const [showQuote, setShowQuote] = useState(false);
    const [activeTab, setActiveTab] = useState(null);

    const handleContactClick = () => {
        setShowContact(true);
        setShowQuote(false);
        setActiveTab('contact');
    };

    const handleQuoteClick = () => {
        setShowContact(false);
        setShowQuote(true);
        setActiveTab('quote');
    };
    return (
        <div className="product_detail_right" style={{ width: '100%', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
            <div className="product_detail_infoName">
                <div onClick={handleContactClick} className={activeTab === 'contact' ? 'active' : ''}>Liên hệ</div>
                <div onClick={handleQuoteClick} className={activeTab === 'quote' ? 'active' : ''}>Báo giá</div>
            </div>
            <div className="info">
                {showContact && (
                    <div className='contact_description'>
                        <p>Email: danangevent@gmail.com</p>
                        <p>Số điện thoại: 123-456-7890</p>
                    </div>
                )}
                {showQuote && (
                    <div className='contact_description_price'>
                        <div className='price_detail'>
                            <p className='btn_contact'>Gói thường</p>
                            <p className='btn_contact'>Gói cao cấp</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ContactComponent
