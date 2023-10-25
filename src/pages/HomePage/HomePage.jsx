import React from 'react'
import IntroduceComponent from '../../components/IntroduceComponent/IntroduceComponent'
import ContentComponent from '../../components/ContentComponent/ContentComponent'
import EventProductComponent from '../../components/EventProductComponent/EventProductComponent'
import eventProduct1 from '../../assets/img/DVSK-1.jpg'
import eventProduct2 from '../../assets/img/DVSK-2.jpg'
import eventProduct3 from '../../assets/img/DVSK-3.jpg'
import eventProduct4 from '../../assets/img/DVSK-4.jpg'
import eventProduct5 from '../../assets/img/DVSK-5.jpg'
import NewProductComponent from '../../components/NewProductComponent/NewProductComponent'
import InfoComponent from '../../components/InfoComponent/InfoComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

const HomePage = () => {
    const data = [
        {
            name: "TỔ CHỨC TẤT NIÊN CUỐI NĂM",
            image: eventProduct1
        },
        {
            name: "TỔ CHỨC TẤT NIÊN CUỐI NĂM",
            image: eventProduct3
        },
        {
            name: "TỔ CHỨC TẤT NIÊN CUỐI NĂM",
            image: eventProduct3
        },
        {
            name: "TỔ CHỨC TẤT NIÊN CUỐI NĂM",
            image: eventProduct3
        },
        {
            name: "TỔ CHỨC TẤT NIÊN CUỐI NĂM",
            image: eventProduct3
        }
    ]
    return (
        <>
            <IntroduceComponent />
            <ContentComponent />
            <div style={{ backgroundColor: '#f7f7f7' }}>
                <h3 className='event_name' style={{ paddingTop: '20px', textAlign: 'center', fontSize: '30px', fontWeight: 'bold', marginTop: '60px' }}>Dịch vụ sự kiện</h3>
                <p className='event_title' style={{ textAlign: 'center', fontSize: '20px' }}>Khám phá dịch vụ tổ chức sự kiện giải trí và hội thảo của Thần Long Event</p>
                <div className='event_product' style={{ display: 'flex', flexWrap: 'wrap', padding: '0px 150px' }}>
                    {data.map((data, index) => (
                        <EventProductComponent key={index} data={data} />
                    ))}
                </div>
            </div>
            <div>
                <NewProductComponent />
            </div>
            <div style={{ marginBottom: '70px' }}>
                <InfoComponent />
            </div>
            <FooterComponent />
        </>
    )
}

export default HomePage
