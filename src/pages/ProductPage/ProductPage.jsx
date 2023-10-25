import React from 'react'
import IntroduceComponent from '../../components/IntroduceComponent/IntroduceComponent'
import ServiceComponent from '../../components/ServiceComponent/ServiceComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'
import InfoComponent from '../../components/InfoComponent/InfoComponent'
import event1 from '../../assets/img/event-1.png'
import event2 from '../../assets/img/event-2.png'
import event3 from '../../assets/img/event-3.png'
import event4 from '../../assets/img/event-4.png'
import event5 from '../../assets/img/event-5.png'
import event6 from '../../assets/img/event-6.png'
import event7 from '../../assets/img/event-7.png'
import event8 from '../../assets/img/event-8.png'
import event9 from '../../assets/img/event-9.png'
import DeviceComponent from '../../components/DeviceComponent/DeviceComponent'
import ProvideComponent from '../../components/ProvideComponent/ProvideComponent'
const ProductPage = () => {
    const data = [
        {
            name: "Tổ chức tiệc - Gala Dinner",
            image: event1
        },
        {
            name: "Lễ khai trương - Khánh thành",
            image: event2
        },
        {
            name: "Lễ khởi công - Động thổ",
            image: event3
        },
        {
            name: "Lễ hội văn hóa",
            image: event4
        },
        {
            name: "Lễ kỷ niệm",
            image: event5
        },
        {
            name: "Lễ ra mắt - Thương hiệu",
            image: event6
        },
        {
            name: "Hội nghị - Hội thảo",
            image: event7
        },
        {
            name: "Tổ chức tiệc cưới",
            image: event8
        },
        {
            name: "Sự kiện cộng đồng",
            image: event9
        },

    ]
    return (
        <>
            <div>
                <IntroduceComponent />
            </div>
            <h3 style={{ textAlign: 'center', textTransform: 'uppercase', fontSize: '20px', marginTop: '60px' }}>Tổ chức sự kiện</h3>
            <div className='wrapper_service' style={{ display: 'flex', flexWrap: 'wrap', padding: '0px 150px' }}>
                {data.map((data, index) => (
                    <ServiceComponent key={index} data={data} />
                ))}
            </div>
            <h3 style={{ textAlign: 'center', textTransform: 'uppercase', fontSize: '20px', marginTop: '60px' }}>
                Cho thuê thiết bị sự kiện
            </h3>
            <div>
                <DeviceComponent />
            </div>
            <h3 style={{ textAlign: 'center', textTransform: 'uppercase', fontSize: '20px', marginTop: '60px' }}>
                Cung cấp nhân sự sự kiện
            </h3>
            <div>
                <ProvideComponent />
            </div>
            <div style={{ marginBottom: '70px' }}>
                <InfoComponent />
            </div>
            <FooterComponent />
        </>
    )
}

export default ProductPage
