import { WorkingListContainer } from './scene/WorkList';



const CountriesContainer = () => {
  const items = WorkingListContainer;

  return (
    <div className='place-to-work'>
      <h1 className='job-title'>OUR OFFER

      </h1>
    <div className='container-page'>
     
        <div className='full-container' >
      {items.map((work, index) => {
        return (
            <div className='background-container' key={index}>
          <div className="work-list" >
            <img src={work.image} alt="work" className="actual-image" 
            onClick={()=>{}}/>
                <div className='content-text'>
                    <h1 className='title-text'>{work.title}</h1>
                    <p className='para-one'>{work.description}</p>
                    <a href='#' className='para-two'>{work.check}</a>
                </div>
            
          </div>
         
          </div>
        );
      })}
      </div>
    
 
      </div>
     
      </div>
  );
};

export default CountriesContainer;