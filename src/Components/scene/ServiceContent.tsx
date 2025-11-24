
import { ServicesData } from './ServicesList'
import "./ContentService.css"

import { HotelReservationData } from '../HotelReservationList'






const ServiceContent = () => {
  return (
    <>
    
    <div className='section-2'>
      <h1 className='explore'>Explore our Comprehensive Range of 
       <p>  offers to some part of the World.</p>
        </h1>
    </div>
    <div className='container-1'>
    <div className='image-cont'>
      <div className='cont-1'>
        {ServicesData.map((item, index) => (
            <div key={index}>
              <div className='imaging-container'>
                <img src={item.image} alt={item.title} className='service-image3' />
                <h2 className='service-title'>{item.title}</h2>
                <button className='apply-now-bottom'>{item.button}</button>
                <div  className='box-contain' >
                    <div className='icon-cont'>
                      {item.icon}</div>
                      
                    <p className='wrkk'>{item.text}</p>
                    <div >
                    <p className='desc-text'>{item.desc} </p>
                    </div>
                    <div className='arrow-right'>
                    <button className='apple-2'>{item.button}</button>
                    {/* <p className='arr-rig'>{item.icons}</p> */}
                    </div>
                </div>


              </div>
            </div>
        ))}
      </div>
     
        <div className='cont-1'>
        {HotelReservationData.map((item, index) => (
            <div key={index}>
              <div className='imaging-container'>
                <img src={item.image1} alt={item.title1} className='service-image3' />
                <h2 className='service-title'>{item.title1}</h2>
                <button className='apply-now-bottom'>{item.button1}</button>
                <div  className='box-contain' >
                    <div className='icon-cont'>
                      {item.icon1}</div>
                      
                    <p className='wrkk'>{item.text1}</p>
                    <div >
                    <p className='desc-text'>{item.desc1} </p>
                    </div>
                    <div className='arrow-right'>
                    <button className='apple-2'>{item.button1}</button>
                    {/* <p className='arr-rig'>{item.icons}</p> */}
                    </div>
                </div>


              </div>
            </div>
        ))}
      </div>
      <div>
        
      </div>
    </div>
    </div>
    
      </>
  )
}

export default ServiceContent