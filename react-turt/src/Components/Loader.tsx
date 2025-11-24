import '././Pages/Css/Loader.css'
import loaderImage from '././images-services/akromah-company-logo.png'

const SpinningEffect = () => {
  return (
    <div className="loader-overlay">
        <div className="loader-image-logo">
            <img src={loaderImage} alt='loading-image-logo' className='loading-image-logo'/>
        </div>
      <div className="animate-spin h-12 w-12 border-t-4 border-b-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>
    </div>
  );
};

export default SpinningEffect;