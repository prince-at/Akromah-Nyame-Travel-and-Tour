
import { ServicesData } from './scene/ServicesList'



const HotelReservation = () => {
  return (
    <div>
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
    </div>
  )
}

export default HotelReservation