
import WorkAbroadPicture from "../../assets/istockphoto-1414982113-612x612.jpg"
import { BlogList } from "../BlogData";
import MarqueeText2 from "../MarqueeText2";
import "./Css/WorkAbroad.css"
import abroadStudy from "../../assets/award-hero-bg.jpg"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";



const StudyAbroadBlog= () => {
const navigate =useNavigate();
  return (
    <motion.div
    key={location.pathname}
     initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
    > 
    <div className="blog-page">
    <img
      src={WorkAbroadPicture}
      alt="blog-background-picture"
      className="Blog-picture"
    />
    <div>
      <h1 className="blog-title-for-topic">  🎓<br/> 5 Reasons Why Studying Abroad<br/> Could Change Your Life</h1>
      {BlogList.map((blog)=>{
        return(
          <div>
            <p className="date-for-blogs">{blog.blogDate1} </p>
          </div>
        )})}
    </div>
       <MarqueeText2/>
  </div>
  
  <div className="work-abroad-container">
    <div className="work-abroad-content">
      {/* <img src={WorkAbroadPicture} alt="work-abroad-pic" className="work-abroad-picture"/> */}
      <h1 className="work-abroad-title">Have you ever thought about studying in another country? Whether it's sipping coffee after class in Italy, exploring temples in Japan, or making new friends in Canada, studying abroad is about more than just academics — it’s a once-in-a-lifetime experience that can shape your future.

If you're still unsure, here are 5 compelling reasons why studying abroad might be the best decision you ever make.</h1>
<img src={abroadStudy} alt="abroadStudy" className="abroad-studies"/>
<hr/>
    <h1 className="global-text">🌍 Global Education, Global Perspective</h1>
    <h1 className="work-abroad-title">When you study abroad, you're exposed to a different style of education, new ideas, and global challenges. Whether you’re attending lectures in Germany or conducting research in Australia, you're learning in a truly international context — something future employers value more than ever.

</h1>
    <hr/>
    <h1 className="global-text">🌐 Learn a New Culture (and Language!)</h1>
    <h1 className="work-abroad-title">There’s no better way to understand a culture than to live in it. From new foods and traditions to holidays and local customs, living abroad lets you immerse yourself in a different way of life. Plus, if you’re heading somewhere with a new language, you'll pick it up much faster when you're surrounded by it daily.


</h1>
<hr/>
    <h1 className="global-text">🤝 Make Lifelong Connections</h1>
    <h1 className="work-abroad-title">Studying abroad means meeting people from around the world — friends, professors, classmates, and locals. These relationships often turn into long-term friendships, international networks, or even career opportunities down the road.
</h1>
<hr/>
    <h1 className="global-text">🚀 Personal Growth and Confidence</h1>
    <h1 className="work-abroad-title">It might feel scary at first — new place, new people, different language. But once you're there, you’ll grow more confident and independent every single day. You’ll learn to solve problems, make decisions on your own, and thrive outside your comfort zone.</h1>
    <hr/>
    <h1 className="global-text">💼 Stand Out in Your Career</h1>
    <h1 className="work-abroad-title">Today’s employers look for international experience. It shows that you’re adaptable, resilient, and can work with people from different backgrounds. Whether you want to work for a global company or start your own business, studying abroad is a major boost to your résumé.</h1>
    <hr/>
    <h1 className="global-text">✈️ Final Thoughts</h1>
    <h1 className="work-abroad-title">Studying abroad is more than just earning a degree in another country. It’s about discovering who you are, what you’re capable of, and how you fit into the bigger world. If you get the chance — take it.

You won’t just come home with credits. You’ll come home with unforgettable stories, global insight, and a whole new version of yourself.</h1>
    <h1 className="work-abroad-title">Thinking about studying abroad? Explore programs, scholarships, and step-by-step guides in our [Study Abroad Resources] section.

</h1>
    <hr/>
    <h1 className="global-text">Conclusion</h1>
    <h1 className="work-abroad-title">Ready to start your studies abroad? Explore current opportunities, visa tips, and destination guides in many Universities across the World.</h1>
    <h1 className="work-abroad-title">Would you like me to tailor this blog post to a specific country, industry (e.g. healthcare, tech), or audience (e.g. students, skilled workers)?</h1>
    <button className="wbtn-get" onClick={() =>  navigate('/contact')}>Get in Touch with Us </button>
    <hr/>
    <h1 className="global-text">Conclusion</h1>
    </div>
   
  </div>
 
  </motion.div>
  )
}

export default StudyAbroadBlog