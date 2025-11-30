import { motion } from "framer-motion"
import Banner from "./Banner"
import FormBanner from "./FormBanner"
import IncomingReviewContainer from "./IncomingReviewContainer"
import ListCountry from "./ListCountry"
import PassionHome from "./PassionHome"
import PlaceToStudy from "./PlaceToStudy"
import Portfolio from "./Portfolio"


function Home() {
  return (
    <motion.div
    key={location.pathname}
     initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
    >
         <ul>
                    <Banner />{" "}
                  </ul>
            
                  <ul>
                    <FormBanner />
                  </ul>

                 
                  <div>
                    <ListCountry />
                  </div>



                  <div>
                    <PassionHome />
                  </div>
                  <div>
                    <PlaceToStudy />
                  </div>
                  <div>{/* <PlaceToStudySecondSection /> */}</div>
                  <div className="portfolio-sticky-cover">
                    <Portfolio />
                  </div>
                  
                  <div className="incoming-view-background-cover">
                    <IncomingReviewContainer />
                  </div>
                
    </motion.div>
  )
}

export default Home