
import globe from "../../images/image-6.png";
import "../About-Us/About.css";

const VisionStatement = () => {
  
  return ( 
    <div className="who-are-we">
      <div className="vision-background">
        <h1 className="vision-statement">Who are we?</h1> 
        <p className="vision-statement-paragraph">
          We're a Travel and Tour Agency, a passionate team of Recruiters, and adventure-seekers. Our
          mission is simple: to provide exceptional recruitment services to the
          travel and tourism industry, delivering high-quality candidates who
          meet the needs of our clients. We strive to build long-term
          relationships with our clients and candidates, promoting mutual growth
          and success."{" "}
        </p>
        <div>
          {" "}
          <button className="vision-statement-button" onClick={() =>window.location.href='/contact'}>Contact Us</button>
        </div>
      </div>
      <div className="imag-can">
        <img src={globe} alt="globe" className="globe" />
      </div>
    </div>
  );
};

export default VisionStatement;
