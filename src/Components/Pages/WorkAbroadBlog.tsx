
import WorkAbroadPicture from "../../assets/h6-Does-Travel-Insurance-Cover-Working-Abroad.jpg"
import { BlogList } from "../BlogData";
import MarqueeText2 from "../MarqueeText2";
import "./Css/WorkAbroad.css"
import workOutside from "../../assets/cover-rise-in-employees-working-abroad.jpg"

import { motion } from "framer-motion";

const WorkAbroadBlog = () => { 

  
  return (
    <motion.div className="cover-for-blog"
    
    key={location.pathname}
     initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}>
    <div className="blog-page">
    <img
      src={WorkAbroadPicture}
      alt="blog-background-picture"
      className="Blog-picture"
    />
    <div>
      <div  className="blog-title-container">
      <h1 className="blog-title-for-topic">  Why Working Abroad Could Be the Best <br/>Decision You Ever Make </h1>
      </div>
      {BlogList.map((blog)=>{
        return(
          <div>
            <p className="date-for-blogs">{blog.blogDate1} </p>
          </div>
        )})}
    </div>
     <MarqueeText2/>
  </div>
  <div>
     
    </div>
  <div className="work-abroad-container">
    <div className="work-abroad-content">
      {/* <img src={WorkAbroadPicture} alt="work-abroad-pic" className="work-abroad-picture"/> */}
      <h1 className="work-abroad-title">Have you ever dreamed of waking up in a new country, sipping coffee in a bustling European city or enjoying a quiet morning in an Asian village before heading to work? Working abroad isn,t just for the adventurous — it,s becoming a life-changing opportunity for people from all walks of life.
      Whether you,re seeking better job prospects, cultural enrichment, or personal growth, here,s why working abroad might be the next big move you should consider.</h1>
    <img src={workOutside} alt="workOutside" className="work-outside"/>
    <hr/>
    <h1 className="global-text">🌍  Expand Your Global Perspective</h1>
    <h1 className="work-abroad-title">Living and working in another country introduces you to new ways of thinking, working, and living. You learn how businesses operate in different cultural contexts, how people approach problems, and how diverse work ethics can be. It’s not just eye-opening — it,s mind-expanding.</h1>
    <hr/>
    <h1 className="global-text">🚀  Boost Your Career</h1>
    <h1 className="work-abroad-title">Employers love candidates who’ve worked internationally. It shows you're adaptable, open-minded, and capable of handling challenges. Many countries also offer opportunities in sectors that are in higher demand than in your home country — meaning faster career growth and better pay.
</h1>
<hr/>
    <h1 className="global-text">💬  Learn New Languages and Skills</h1>
    <h1 className="work-abroad-title">Immersion is the best teacher. Whether it's picking up fluent Spanish in Madrid or mastering Japanese business etiquette in Tokyo, working abroad forces you to grow in ways that go beyond textbooks and training videos.
</h1>
<hr/>
    <h1 className="global-text">🤝  Build a Global Network</h1>
    <h1 className="work-abroad-title">Your coworkers, friends, and even your neighbors become a part of your professional and social network. These international connections can lead to unexpected job opportunities, collaborations, or simply lifelong friendships across continents.</h1>
    <hr/>
    <h1 className="global-text">🌴  Discover a New Lifestyle</h1>
    <h1 className="work-abroad-title">From work-life balance to cuisine to weekend adventures, every country offers something unique. You might find that working fewer hours with more vacation time isn’t a dream — it’s standard. Or you might fall in love with local markets, public transportation, or that one hidden beach no tourist guide ever mentions.</h1>
    <hr/>
    <h1 className="global-text">💡 Final Thoughts</h1>
    <h1 className="work-abroad-title">Working abroad isn’t always easy. There will be culture shock, paperwork, and moments when you miss home. But the personal and professional rewards can far outweigh the challenges. It’s not just a job — it’s an experience that can shape the rest of your life.</h1>
    <h1 className="work-abroad-title">So if you’ve ever thought about taking that leap, maybe now’s the time. The world is waiting — and so is your next great adventure.</h1>
    <hr/>
    <h1 className="global-text">Conclusion</h1>
    <h1 className="work-abroad-title">Ready to start your work abroad journey? Explore current opportunities, visa tips, and destination guides in our Work Abroad Resources section.</h1>
    <h1 className="work-abroad-title">Would you like me to tailor this blog post to a specific country, industry (e.g. healthcare, tech), or audience (e.g. students, skilled workers)?</h1>
    <button className="wbtn-get" onClick={() => window.location.href='/contact'}>Get in Touch with Us </button>
    <hr/>
    
    </div>
   
  </div>
 
  </motion.div>
  )
}

export default WorkAbroadBlog