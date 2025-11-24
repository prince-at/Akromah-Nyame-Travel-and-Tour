
import { Destination } from './scene/DestinationList'



const TopDestination = () => {
  return (
    <div className='destinationContainer'>
        {
            Destination.map((item, index) => (
                <div key={index}>
                    <img src={item.image} alt="Destination" className='destinationImage' />
                    <div className='destinationText'>
                        <h1 className='heading-text'>{item.paragrap}</h1>
                        <p className='paragraph-text'>{item.test}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default TopDestination